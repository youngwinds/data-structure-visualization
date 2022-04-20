import { merge, cloneDeep } from 'lodash';
import { GraphChart, GraphDataType } from '@dsv-charts/charts';
import { DsGraphConfigType, DsGraphThemeType } from './type';
import { forceLink, forceManyBody, forceSimulation, forceX, forceY } from 'd3';

interface IDsGraphNode {
  name?: string;
  value?: string | number;
  next?: IDsGraphNode;
  state?: string;
}

class DsGraphNode {
  name: string;
  value: string | number;
  next: IDsGraphNode | null = null;
  state: string;
  dsGraph: DsGraph;

  constructor(props: IDsGraphNode, dsGraph: DsGraph) {
    this.name = props.name ?? '';
    this.value = props.value ?? '';
    this.state = props.state ?? '';
    this.next = props.next ?? null;

    this.dsGraph = dsGraph;
  }

  addAdjacencyLink(node: DsGraphNode): this {
    if (this.next === null) {
      // head
      this.next = node.getData();
    } else {
      // next
      let p = this.next;
      while (p.next) {
        p = p.next;
      }
      p.next = node.getData();
    }

    this.dsGraph.setData();
    return this;
  }

  getData() {
    return {
      value: this.value,
      name: this.name,
      state: this.state,
      next: this.next,
    };
  }

  setVisual(color: string) {
    this.state = color;
    this.dsGraph.setData();
  }
}

class DsGraph extends GraphChart {
  // 邻接表
  private dsData: Array<DsGraphNode> = [];
  private promiseQueue: any[] = [];

  constructor(customConfig: DsGraphConfigType, customTheme: DsGraphThemeType) {
    super('container', merge({}, customConfig), merge({}, customTheme));
  }

  createNode(nodeData: IDsGraphNode) {
    const node = new DsGraphNode(
      {
        ...nodeData,
        state: '',
        next: null,
      },
      this
    );

    this.dsData.push(node);
    this.setData();
    return node;
  }

  findNode(name: IDsGraphNode) {
    return this.dsData.find((d) => d.name === name);
  }

  setData(sourceData?: undefined) {
    if (sourceData) {
      super.setData(sourceData);
      return this;
    }

    const chartData = this.convertDsDataToChartData();
    console.log(chartData);

    this.calculateTheLayout(chartData);
    return this;
  }

  convertDsDataToChartData(dsData?: Array<DsGraphNode>) {
    const data = this.dsData ?? dsData;
    const result = {
      nodes: [],
      links: [],
    };

    result.nodes = data.map((d) => {
      return {
        name: d.name,
        value: d.value,
        state: d.state,
      };
    });

    for (let i = 0; i < data.length; i++) {
      const node = this.dsData[i];
      let pointer = node.next;

      while (pointer) {
        result.links.push({
          state: '',
          source: node.name,
          target: pointer.name,
        });

        pointer = pointer.next;
      }
    }

    return result;
  }

  calculateTheLayout({ nodes, links }) {
    const promise = new Promise<GraphDataType>((resolve) => {
      forceSimulation(nodes)
        .force(
          'link',
          forceLink(links)
            .id((d: any) => d.name)
            .distance(200)
        )
        .force('charge', forceManyBody().strength(-1000))
        .force('x', forceX())
        .force('y', forceY())
        .alphaDecay(0.25)
        .on('end', () => {
          resolve({
            nodes: cloneDeep(nodes),
            links: cloneDeep(links),
          });
        });
    });
    this.promiseQueue.push(promise);
  }

  async startLayout(): Promise<true> {
    const values = await Promise.all(this.promiseQueue);

    for (let data of values) {
      super.setData(data);
    }

    return true;
  }

  toString() {
    return JSON.stringify(this.convertDsDataToChartData(), null, 4);
  }
}

export { DsGraph, DsGraphConfigType, DsGraphThemeType };
