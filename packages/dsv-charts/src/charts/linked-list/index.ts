import { Selection, scalePoint, linkHorizontal } from 'd3';
import { merge } from 'lodash';
import { Cartesian2Layout } from '@dsv-charts/components';
import { BaseChart } from '@dsv-charts/charts/base';
import {
  LinkedListConfigType,
  LinkedListThemeType,
  LinkedListDataType,
  LinkedNodeType,
  LinkedLinkType,
} from './type';
import { defaultConfig, defaultTheme } from './default';

class LinkedListChart extends BaseChart<
  LinkedListConfigType,
  LinkedListThemeType,
  LinkedListDataType
> {
  layout: Cartesian2Layout;
  nodesGroup: Selection<SVGGElement, unknown, null, undefined>;
  linksGroup: Selection<SVGGElement, unknown, null, undefined>;

  nodes: LinkedNodeType[] = [];
  links: LinkedLinkType[] = [];

  constructor(
    selector: string | HTMLElement,
    config: LinkedListConfigType,
    theme: LinkedListThemeType
  ) {
    super(
      selector,
      merge({}, defaultConfig, config),
      merge({}, defaultTheme, theme)
    );

    this.layout = this.initLayout();
    this.initGroup();
    super.chartDidChartInit();
  }

  initLayout(): Cartesian2Layout {
    return new Cartesian2Layout(super.getDom(), super.getConfigByKey('layout'));
  }

  initGroup(): void {
    this.nodesGroup = this.layout.addGroup();
    this.linksGroup = this.layout.addGroup();
  }

  render(data?: LinkedListDataType): this {
    data && super.updateData(data);

    this.recalculateLayout();
    this.renderNodeGroup();
    this.renderLinksGroup();

    return this;
  }

  async renderAsync(data?: LinkedListDataType): Promise<true> {
    data && super.updateData(data);

    return await new Promise((resolve) => {
      this.render().transitionEnd(resolve);
    });
  }

  private transitionEnd(resolve) {
    const { duration } = super.getConfigByKey('transition');

    return this.nodesGroup.call((g) => {
      g.transition()
        .duration(duration)
        .on('end', () => {
          resolve(true);
        });
    });
  }

  recalculateLayout() {
    this.nodes = this.calculateNodes();
    this.links = this.calculateLinks();
  }

  calculateNodes() {
    const nodes = this.getData().nodes;
    const rect = this.layout.getInnerRect();

    const scale = scalePoint()
      .domain(nodes.map((d) => d.key))
      .range([rect.innerLeft, rect.innerRight]);

    return nodes.map((d) => ({
      x: scale(d.key),
      y: rect.innerCenter[1],
      value: d.value,
      key: d.key,
      name: d.name,
    }));
  }

  calculateLinks() {
    const links = this.getData().links;

    return links.map((d) => {
      const sourceNode = this.nodes.find((node) => node.key === d.source.key);
      const targetNode = this.nodes.find((node) => node.key === d.target.key);
      return {
        source: { ...sourceNode, x: sourceNode.x, y: sourceNode.y },
        target: { ...targetNode, x: targetNode.x, y: targetNode.y },
      };
    });
  }

  renderNodeGroup() {
    this.nodesGroup.call((g) => {
      g.selectAll('circle')
        .data(this.nodes)
        .join('circle')
        .transition()
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', 10);
    });
  }

  renderLinksGroup() {
    const link = linkHorizontal()
      .x((d: any) => d.x)
      .y((d: any) => d.y);

    console.log(this.links);
    this.linksGroup.call((g) => {
      g.selectAll('path')
        .data(this.links)
        .join('path')
        .transition()
        .attr('d', (d) => link(d as any))
        .attr('stroke', '#212121');
    });
  }

  getData() {
    return super.getData() as LinkedListDataType;
  }

  destroy(): void {
    super.chartWillDestroyed();
    super.destroy();
    super.chartDidDestroyed();
  }
}

export {
  LinkedListChart,
  LinkedListConfigType,
  LinkedListThemeType,
  LinkedListDataType,
  LinkedNodeType,
};
