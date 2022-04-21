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
  markerGroup: Selection<SVGGElement, unknown, null, undefined>;
  textGroup: Selection<SVGGElement, unknown, null, undefined>;

  nodes: LinkedNodeType[] = [];
  links: LinkedLinkType[] = [];

  radius: number = 15;

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
    this.linksGroup = this.layout.addGroup();
    this.textGroup = this.layout.addGroup();
    this.nodesGroup = this.layout.addGroup();
    this.markerGroup = this.layout.addGroup();
  }

  render(data?: LinkedListDataType): this {
    data && super.updateData(data);

    this.recalculateLayout();
    this.renderMarkerGroup();
    this.renderNodeGroup();
    this.renderLinksGroup();
    this.renderTextGroup();

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

      if (sourceNode.x < targetNode.x) {
        return {
          source: {
            ...sourceNode,
            x: sourceNode.x + this.radius,
            y: sourceNode.y,
          },
          target: {
            ...targetNode,
            x: targetNode.x - this.radius,
            y: targetNode.y,
          },
        };
      }

      return {
        source: {
          ...sourceNode,
          x: sourceNode.x - this.radius,
          y: sourceNode.y,
        },
        target: {
          ...targetNode,
          x: targetNode.x + this.radius,
          y: targetNode.y,
        },
      };
    });
  }

  renderMarkerGroup() {
    const arrow = this.getThemeByKey('arrow');
    const marker = {
      id: 'arrow',
      viewBox: `0 ${-this.radius} ${this.radius * 2} ${this.radius * 2}`,
      refX: `10`,
      markerWidth: `${this.radius}`,
      markerHeight: `${this.radius}`,
      orient: 'auto',
    };
    const path = {
      d: 'M0,-5 L10,0 L0,5',
    };
    this.markerGroup.call((g) => {
      g.selectAll('marker')
        .data([marker])
        .join('marker')
        .attr('id', (d) => d.id)
        .attr('viewBox', (d) => d.viewBox)
        .attr('refX', (d) => d.refX)
        .attr('markerWidth', (d) => d.markerWidth)
        .attr('markerHeight', (d) => d.markerHeight)
        .attr('orient', (d) => d.orient)
        .selectAll('path')
        .data([path])
        .join('path')
        .attr('d', (d) => d.d)
        .attr('stroke', arrow.color);
    });
  }

  renderNodeGroup() {
    const transition = super.getConfigByKey('transition');
    const colorScheme = super.getThemeByKey('colorScheme');
    const innerRect = this.layout.getInnerRect();

    this.nodesGroup.call((g) => {
      g.selectAll('circle')
        .data(this.nodes)
        .join(
          (enter) =>
            enter
              .append('circle')
              .attr('cy', (d) => d.y)
              .attr('cx', innerRect.innerRight)
              .attr('fill', '#ffffff')
              .attr('stroke', colorScheme[0])
              .attr('stroke-width', 5)
              .transition()
              .duration(transition.duration)
              .attr('cx', (d) => d.x)
              .attr('r', this.radius),
          (update) =>
            update
              .transition()
              .duration(transition.duration)
              .attr('fill', '#ffffff')
              .attr('stroke', colorScheme[0])
              .attr('cx', (d) => d.x),
          (exit) =>
            exit.attr('opacity', 1).transition().attr('opacity', 0).remove()
        );
    });
  }

  renderLinksGroup() {
    const transition = super.getConfigByKey('transition');
    const arrow = super.getThemeByKey('arrow');

    const link = linkHorizontal()
      .x((d: any) => d.x)
      .y((d: any) => d.y);

    this.linksGroup.call((g) => {
      g.selectAll('path')
        .data(this.links)
        .join(
          (enter) =>
            enter
              .append('path')
              .attr('style', 'marker-end: url("#arrow")')
              .attr('stroke', arrow.color)
              .attr('stroke-width', arrow.width)
              .attr('d', (d) =>
                link({
                  source: d.source,
                  target: d.source,
                } as any)
              )
              .transition()
              .duration(transition.duration)
              .attr('d', (d) => link(d as any))
              .attr('stroke', arrow.color)
              .attr('stroke-width', arrow.width),
          (update) =>
            update
              .transition()
              .duration(transition.duration)
              .attr('d', (d) => link(d as any)),
          (exit) =>
            exit
              .transition()
              .attr('d', (d) =>
                link({
                  source: d.source,
                  target: d.source,
                } as any)
              )
              .remove()
        );
    });
  }

  renderTextGroup() {
    const transition = super.getConfigByKey('transition');
    const text = super.getThemeByKey('text');
    const innerRect = this.layout.getInnerRect();

    this.nodesGroup.call((g) => {
      g.selectAll('text')
        .data(this.nodes)
        .join(
          (enter) =>
            enter
              .append('text')
              .attr('y', (d) => d.y)
              .attr('text-anchor', 'middle')
              .attr('dominant-baseline', 'middle')
              .attr('x', innerRect.innerRight)
              .attr('fill', text.color)
              .style('opacity', 0)
              .transition()
              .duration(transition.duration)
              .attr('x', (d) => d.x)
              .style('font-size', this.radius)
              .style('opacity', 1)
              .selection()
              .html((d) => d.name),
          (update) =>
            update
              .transition()
              .duration(transition.duration)
              .attr('x', (d) => d.x),
          (exit) =>
            exit.attr('opacity', 1).transition().attr('opacity', 0).remove()
        );
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
