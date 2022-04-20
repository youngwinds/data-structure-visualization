import { merge, cloneDeep } from 'lodash';
import { GraphChart, GraphDataType } from '@dsv-charts/charts';
import { DsGraphConfigType, DsGraphThemeType } from './type';
import { forceLink, forceManyBody, forceSimulation, forceX, forceY } from 'd3';

interface IDsGraphNode {
  key?: string;
  name?: string;
  value?: string | number;
  next?: IDsGraphNode;
}

class DsGraphNode {
  key: string;
  name: string;
  value: string | number;
  next: IDsGraphNode | null = null;
  dsGraph: DsGraph;

  constructor(props: IDsGraphNode, dsGraph: DsGraph) {
    this.key = props.key ?? '';
    this.name = props.name ?? '';
    this.value = props.value ?? '';
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
      key: this.key,
      value: this.value,
      name: this.name,
      next: this.next,
    };
  }
}

class DsGraph extends GraphChart {
  // 邻接表
  private dsData: Array<DsGraphNode> = [];
  private size: number = 0;
  private promiseQueue: any[] = [];

  constructor(customConfig: DsGraphConfigType, customTheme: DsGraphThemeType) {
    super('container', merge({}, customConfig), merge({}, customTheme));
  }

  createNode(nodeData: IDsGraphNode) {
    const node = new DsGraphNode(
      {
        ...nodeData,
        key: String(++this.size),
        next: null,
      },
      this
    );

    this.dsData.push(node);
    this.setData();
    return node;
  }

  convertDsDataToChartData() {
    const result = {
      nodes: [],
      links: [],
    };

    result.nodes = this.dsData.map((d) => {
      return {
        key: d.key,
        name: d.name,
        value: d.value,
      };
    });

    for (let i = 0; i < this.dsData.length; i++) {
      const node = this.dsData[i];
      let pointer = node.next;
      while (pointer) {
        result.links.push({
          source: node.name,
          target: pointer.name,
        });
        pointer = pointer.next;
      }
    }
    return result;
  }

  setData(sourceData?: undefined) {
    if (sourceData) {
      super.setData(sourceData);
      return this;
    }

    const data = this.convertDsDataToChartData();
    this.calculateTheLayout(data);
    return this;
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
        .alphaDecay(0.1)
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
    console.log('start calculateTheLayout');

    const values = await Promise.all(this.promiseQueue);

    console.log('end calculateTheLayout', values);

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
