import { isString } from '@dsv-charts/utils/type-check';
import {
  Selection,
  hierarchy,
  HierarchyPointNode,
  tree,
  linkVertical,
  HierarchyPointLink,
} from 'd3';
import { Cartesian2Layout } from '@dsv-charts/components';
import { merge } from 'lodash';
import { BaseChart } from '@dsv-charts/charts/base';
import {
  BinaryTreeConfigType,
  BinaryTreeDataType,
  BinaryTreeThemeType,
  BinaryTreeNodeType,
} from './type';
import { defaultConfig, defaultTheme } from './default';

class BinaryTreeChart extends BaseChart<
  BinaryTreeConfigType,
  BinaryTreeThemeType,
  BinaryTreeDataType
> {
  layout: Cartesian2Layout;
  nodesGroup: Selection<SVGGElement, unknown, null, undefined>;
  linksGroup: Selection<SVGGElement, unknown, null, undefined>;
  textsGroup: Selection<SVGGElement, unknown, null, undefined>;

  rootData: HierarchyPointNode<BinaryTreeNodeType>;
  radius = 15;

  constructor(
    selector: string | HTMLElement,
    config: BinaryTreeConfigType,
    theme: BinaryTreeThemeType
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
    this.nodesGroup = this.layout.addGroup();
    this.textsGroup = this.layout.addGroup();
  }

  render(data?: BinaryTreeDataType): this {
    data && super.updateData(data);

    this.recalculateLayout();
    this.renderNodes();
    this.renderLinks();
    this.renderTexts();

    return this;
  }

  async renderAsync(data?: BinaryTreeDataType): Promise<true> {
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
    const root = hierarchy<BinaryTreeNodeType>(
      super.getConfigByKey('data'),
      (d) => {
        return d.children;
      }
    );

    this.rootData = tree<BinaryTreeNodeType>().size([
      innerRect.innerWidth,
      innerRect.innerHeight,
    ])(root);
  }

  renderNodes() {
    const colorScheme = this.getThemeByKey('colorScheme');
    const transition = this.getConfigByKey('transition');
    const innerRect = this.layout.getInnerRect();

    const transform = (d: HierarchyPointNode<BinaryTreeNodeType>) => {
      return `translate(${d.x + innerRect.innerLeft},${
        d.y + innerRect.innerTop
      })`;
    };

    const stroke = (d: HierarchyPointNode<BinaryTreeNodeType>) => {
      if (isString(d.data.state)) {
        return d.data.state;
      }

      return colorScheme[0];
    };

    this.nodesGroup.call((g) => {
      g.selectAll('circle')
        .data(
          this.rootData.descendants(),
          (d: HierarchyPointNode<BinaryTreeNodeType>) => d.data.name
        )
        .join(
          (enter) =>
            enter
              .append('circle')
              .attr('transform', transform)
              .attr('fill', '#ffffff')
              .attr('stroke', stroke)
              .attr('stroke-width', 5)
              .attr('r', 0)
              .transition()
              .duration(transition.duration)
              .attr('r', this.radius),
          (update) =>
            update
              .transition()
              .duration(transition.duration)
              .attr('stroke', stroke)
              .attr('transform', transform),
          (exit) =>
            exit
              .transition()
              .duration(transition.duration)
              .attr('r', 0)
              .remove()
        );
    });
  }

  renderTexts() {
    const text = this.getThemeByKey('text');
    const innerRect = this.layout.getInnerRect();
    const transition = this.getConfigByKey('transition');

    const transform = (d: HierarchyPointNode<BinaryTreeNodeType>) => {
      return `translate(${d.x + innerRect.innerLeft},${
        d.y + innerRect.innerTop
      })`;
    };

    const fill = (d) => {
      if (isString(d.data.state) && d.data.state.length !== 0) {
        return d.data.state;
      }
      return text.color;
    };

    this.textsGroup.call((g) => {
      g.selectAll('text')
        .data(
          this.rootData.descendants(),
          (d: HierarchyPointNode<BinaryTreeNodeType>) => d.data.name
        )
        .join(
          (enter) =>
            enter
              .append('text')
              .attr('transform', transform)
              .attr('text-anchor', 'middle')
              .attr('dominant-baseline', 'middle')
              .attr('fill', fill)
              .html((d) => d.data.name)
              .attr('font-size', 0)
              .transition()
              .duration(transition.duration)
              .attr('font-size', this.radius),
          (update) =>
            update
              .transition()
              .duration(transition.duration)
              .attr('transform', transform)
              .attr('fill', fill)
              .selection()
              .html((d) => d.data.name),
          (exit) =>
            exit
              .transition()
              .duration(transition.duration)
              .attr('font-size', 0)
              .remove()
        );
    });
  }

  renderLinks() {
    const arrow = this.getThemeByKey('arrow');
    const transition = this.getConfigByKey('transition');
    const innerRect = this.layout.getInnerRect();

    const link = linkVertical()
      .x((d: any) => d.x + innerRect.innerLeft)
      .y((d: any) => d.y + innerRect.innerTop);

    this.linksGroup.call((g) => {
      return g
        .selectAll('path')
        .data(
          this.rootData.links(),
          (d: HierarchyPointLink<BinaryTreeNodeType>) =>
            `${d.source.data.name}-${d.target.data.name}`
        )
        .join(
          (enter) =>
            enter
              .append('path')
              .attr('d', (d) =>
                link({ source: d.source, target: d.source } as any)
              )
              .transition()
              .duration(transition.duration)
              .attr('d', link as any)
              .attr('r', this.radius)
              .attr('fill', 'none')
              .attr('stroke', arrow.color)
              .attr('stroke-width', arrow.width),
          (update) =>
            update
              .transition()
              .duration(transition.duration)
              .attr('d', link as any),
          (exit) =>
            exit
              .transition()
              .duration(transition.duration)
              .attr('d', (d) =>
                link({ source: d.target, target: d.target } as any)
              )
              .remove()
        );
    });
  }

  destroy() {
    this.nodesGroup.remove();
    this.linksGroup.remove();
    this.textsGroup.remove();
    this.rootData = null;
    this.radius = null;
    this.layout.destroy();
    super.destroy();
  }
}

export {
  BinaryTreeChart,
  BinaryTreeConfigType,
  BinaryTreeThemeType,
  BinaryTreeDataType,
};
