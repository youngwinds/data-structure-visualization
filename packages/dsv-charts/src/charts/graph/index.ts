import {
  Selection,
  Simulation,
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceLink,
  forceCollide,
} from 'd3';
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
    this.nodesGroup = this.layout.addGroup();
    this.linksGroup = this.layout.addGroup();
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

    return this.nodesGroup.call((g) => {
      g.transition()
        .duration(duration)
        .on('end', () => {
          resolve(true);
        });
    });
  }

  render(data?: GraphDataType) {
    data && super.updateData(data);

    this.recalculateLayout();
    this.renderNodes();
    this.renderLinks();
    this.renderTexts();

    return this;
  }

  recalculateLayout() {
    this.nodes = this.getConfigByKey('data').nodes;
    this.links = this.getConfigByKey('data').links;

    const innerRect = this.layout.getInnerRect();

    this.simulation = forceSimulation<GraphNodeType, GraphLinkType>(this.nodes)
      .force(
        'link',
        forceLink<GraphNodeType, GraphLinkType>(this.links).id((d) => d.name)
      )
      .force('collide', forceCollide(30))
      .force('charge', forceManyBody())
      .force('center', forceCenter(...innerRect.innerCenter))
      .on('tick', () => {
        this.linksGroup
          .selectAll('line')
          .attr('x1', (d: GraphLinkType) => d.source.x)
          .attr('y1', (d: GraphLinkType) => d.source.y)
          .attr('x2', (d: GraphLinkType) => d.target.x)
          .attr('y2', (d: GraphLinkType) => d.target.y);

        this.nodesGroup
          .selectAll('circle')
          .attr('cx', (d: GraphNodeType) => d.x)
          .attr('cy', (d: GraphNodeType) => d.y);

        this.textsGroup
          .selectAll('text')
          .attr('x', (d: GraphNodeType) => d.x)
          .attr('y', (d: GraphNodeType) => d.y);
      });
  }

  renderNodes() {
    const colorScheme = this.getThemeByKey('colorScheme');
    this.nodesGroup
      .selectAll('circle')
      .data(this.nodes)
      .join('circle')
      .attr('r', 15)
      .attr('fill', colorScheme[0])
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 1);
  }

  renderLinks() {
    const arrow = this.getThemeByKey('arrow');

    this.linksGroup
      .selectAll('line')
      .data(this.links)
      .join('line')
      .attr('stroke', arrow.color)
      .attr('stroke-width', arrow.width);
  }

  renderTexts() {
    const text = this.getThemeByKey('text');

    this.textsGroup
      .selectAll('text')
      .data(this.nodes)
      .join('text')
      .attr('stroke', text.color)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('stroke-width', 1)
      .html((d) => d.name);
  }
}

export { GraphChart, GraphConfigType, GraphThemeType, GraphDataType };
