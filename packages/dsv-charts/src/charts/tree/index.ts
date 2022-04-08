import {
  Selection,
  hierarchy,
  HierarchyPointNode,
  tree,
  linkVertical,
} from 'd3';
import { Cartesian2Layout } from '@dsv-charts/components';
import { merge } from 'lodash';
import { BaseChart } from '@dsv-charts/charts/base';
import {
  TreeConfigType,
  TreeDataType,
  TreeThemeType,
  TreeNodeType,
} from './type';
import { defaultConfig, defaultTheme } from './default';

class TreeChart extends BaseChart<TreeConfigType, TreeThemeType, TreeDataType> {
  layout: Cartesian2Layout;
  nodesGroup: Selection<SVGGElement, unknown, null, undefined>;
  linksGroup: Selection<SVGGElement, unknown, null, undefined>;
  markerGroup: Selection<SVGGElement, unknown, null, undefined>;
  textsGroup: Selection<SVGGElement, unknown, null, undefined>;

  rootData: HierarchyPointNode<TreeNodeType>;
  radius = 15;

  constructor(
    selector: string | HTMLElement,
    config: TreeConfigType,
    theme: TreeThemeType
  ) {
    super(
      selector,
      merge({}, defaultConfig, config),
      merge({}, defaultTheme, theme)
    );

    this.layout = this.initLayout();
    this.initGroup();
  }

  initLayout(): Cartesian2Layout {
    return new Cartesian2Layout(super.getDom(), super.getConfigByKey('layout'));
  }

  initGroup(): void {
    this.linksGroup = this.layout.addGroup();
    this.nodesGroup = this.layout.addGroup();
    this.textsGroup = this.layout.addGroup();
  }

  render(data?: TreeDataType): this {
    data && super.updateData(data);

    this.recalculateLayout();
    this.renderNodes();
    this.renderLinks();
    this.renderTexts();

    return this;
  }

  async renderAsync(data?: TreeDataType): Promise<true> {
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
    const innerRect = this.layout.getInnerRect();
    const root = hierarchy<TreeNodeType>(super.getConfigByKey('data'), (d) => {
      return d.children;
    });

    this.rootData = tree<TreeNodeType>().size([
      innerRect.innerWidth,
      innerRect.innerHeight,
    ])(root);
  }

  renderNodes() {
    const colorScheme = this.getThemeByKey('colorScheme');
    const innerRect = this.layout.getInnerRect();

    this.nodesGroup.call((g) => {
      g.selectAll('circle')
        .data(this.rootData.descendants())
        .join('circle')
        .attr(
          'transform',
          (d) =>
            `translate(${d.x + innerRect.innerLeft},${
              d.y + innerRect.innerTop
            })`
        )
        .attr('r', this.radius)
        .attr('fill', colorScheme[0]);
    });
  }

  renderTexts() {
    const text = this.getThemeByKey('text');
    const innerRect = this.layout.getInnerRect();

    this.textsGroup.call((g) => {
      g.selectAll('text')
        .data(this.rootData.descendants())
        .join('text')
        .attr(
          'transform',
          (d) =>
            `translate(${d.x + innerRect.innerLeft},${
              d.y + innerRect.innerTop
            })`
        )
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', text.color)
        .attr('font-size', this.radius)
        .html((d) => d.data.name);
    });
  }

  renderLinks() {
    const arrow = this.getThemeByKey('arrow');
    const innerRect = this.layout.getInnerRect();

    const link = linkVertical()
      .x((d: any) => d.x + innerRect.innerLeft)
      .y((d: any) => d.y + innerRect.innerTop);

    this.linksGroup.call((g) => {
      return g
        .selectAll('path')
        .data(this.rootData.links())
        .join('path')
        .attr('d', link as any)
        .attr('r', this.radius)
        .attr('fill', 'none')
        .attr('stroke', arrow.color)
        .attr('stroke-width', arrow.width);
    });
  }
}

export { TreeChart, TreeConfigType, TreeThemeType, TreeDataType };
