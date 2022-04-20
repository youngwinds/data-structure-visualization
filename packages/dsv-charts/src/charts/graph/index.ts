import { Selection, Simulation } from 'd3';
import { Cartesian2Layout } from '@dsv-charts/components';
import { merge } from 'lodash';
import { BaseChart } from '@dsv-charts/charts/base';
import {
  GraphConfigType,
  GraphThemeType,
  GraphDataType,
  GraphNodeType,
  GraphLinkType,
} from './type';

import { defaultConfig, defaultTheme } from './default';
import { isString } from '@dsv-charts/utils';

class GraphChart extends BaseChart<
  GraphConfigType,
  GraphThemeType,
  GraphDataType
> {
  layout: Cartesian2Layout;

  nodesGroup: Selection<SVGGElement, unknown, null, undefined>;
  linksGroup: Selection<SVGGElement, unknown, null, undefined>;
  textsGroup: Selection<SVGGElement, unknown, null, undefined>;

  nodes: Array<GraphNodeType>;
  links: Array<GraphLinkType>;
  simulation: Simulation<GraphNodeType, GraphLinkType>;

  constructor(
    selector: string | HTMLElement,
    config: GraphConfigType,
    theme: GraphThemeType
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
    const rect = this.layout.getRect();
    this.layout
      .getSvg()
      .attr('viewBox', [
        -rect.width / 2,
        -rect.height / 2,
        rect.width,
        rect.height,
      ]);

    this.linksGroup = this.layout.addGroup();
    this.nodesGroup = this.layout.addGroup();
    this.textsGroup = this.layout.addGroup();
  }

  async renderAsync(data?: GraphDataType): Promise<true> {
    data && super.updateData(data);

    return await new Promise((resolve) => {
      this.render().transitionEnd(resolve);
    });
  }

  private transitionEnd(resolve) {
    const { duration } = super.getConfigByKey('transition');
    setTimeout(() => {
      resolve(true);
    }, duration);
    return this;
  }

  render(data?: GraphDataType) {
    this.renderNodes();
    this.renderLinks();
    this.renderTexts();
    return this;
  }

  renderNodes() {
    const { nodes } = this.getConfigByKey('data');
    const colorScheme = this.getThemeByKey('colorScheme');

    const stroke = (d: GraphNodeType) => {
      if (isString(d.state) && d.state.length !== 0) {
        return d.state;
      }
      return colorScheme[0];
    };

    this.nodesGroup
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 1)
      .selectAll('circle')
      .data(nodes, (d: GraphNodeType) => d.name)
      .join(
        (enter) =>
          enter
            .append('circle')
            .attr('r', 15)
            .attr('stroke', stroke)
            .attr('fill', `#ffffff`)
            .attr('stroke-width', 5)
            .transition()
            .attr('cx', (d: GraphNodeType) => d.x)
            .attr('cy', (d: GraphNodeType) => d.y),
        (update) =>
          update
            .transition()
            .attr('stroke', stroke)
            .attr('cx', (d: GraphNodeType) => d.x)
            .attr('cy', (d: GraphNodeType) => d.y),
        (exit) => exit.remove()
      );
  }

  renderLinks() {
    const { links } = this.getConfigByKey('data');
    const arrow = this.getThemeByKey('arrow');

    const stroke = (d: GraphLinkType) => {
      if (isString(d.state) && d.state.length !== 0) {
        return d.source.state;
      }
      return arrow.color;
    };

    this.linksGroup
      .attr('stroke-width', arrow.width)
      .selectAll('line')
      .data(links, (d: GraphLinkType) => `${d.source.name}-${d.target.name}`)
      .join(
        (enter) =>
          enter
            .append('line')
            .attr('stroke', arrow.color)
            .attr('x1', (d: GraphLinkType) => d.source.x)
            .attr('y1', (d: GraphLinkType) => d.source.y)
            .attr('x2', (d: GraphLinkType) => d.source.x)
            .attr('y2', (d: GraphLinkType) => d.source.y)
            .transition()
            .attr('x1', (d: GraphLinkType) => d.source.x)
            .attr('y1', (d: GraphLinkType) => d.source.y)
            .attr('x2', (d: GraphLinkType) => d.target.x)
            .attr('y2', (d: GraphLinkType) => d.target.y),
        (update) =>
          update
            .transition()
            .attr('stroke', stroke)
            .attr('x1', (d: GraphLinkType) => d.source.x)
            .attr('y1', (d: GraphLinkType) => d.source.y)
            .attr('x2', (d: GraphLinkType) => d.target.x)
            .attr('y2', (d: GraphLinkType) => d.target.y),
        (exit) => exit.remove()
      );
  }

  renderTexts() {
    const { nodes } = this.getConfigByKey('data');

    const text = this.getThemeByKey('text');

    this.textsGroup
      .selectAll('text')
      .data(nodes, (d: GraphNodeType) => d.name)
      .join(
        (enter) =>
          enter
            .append('text')
            .attr('stroke', text.color)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('stroke-width', 1)
            .html((d) => d.name)
            .transition()
            .attr('x', (d: GraphNodeType) => d.x)
            .attr('y', (d: GraphNodeType) => d.y),
        (update) =>
          update
            .transition()
            .attr('x', (d: GraphNodeType) => d.x)
            .attr('y', (d: GraphNodeType) => d.y),
        (exit) => exit.remove()
      );
  }
}

export { GraphChart, GraphConfigType, GraphThemeType, GraphDataType };
