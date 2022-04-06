import { Selection, scaleBand, ScaleBand, easeCubic } from 'd3';
import { merge } from 'lodash';

import { Cartesian2Layout } from '@dsv-charts/components';

import {
  StackChartItemType,
  StackChartDataType,
  StackChartConfigType,
  StackChartThemeType,
} from './type';

import { defaultConfig, defaultTheme } from './default';
import { BaseChart } from '../base';

class StackChart extends BaseChart<
  StackChartConfigType,
  StackChartThemeType,
  StackChartDataType
> {
  layout: Cartesian2Layout;
  rectGroup: Selection<SVGGElement, unknown, null, undefined>;
  textGroup: Selection<SVGGElement, unknown, null, undefined>;
  containerGroup: Selection<SVGGElement, unknown, null, undefined>;

  yScale: ScaleBand<string>;

  constructor(
    selector: string | HTMLElement,
    config: StackChartConfigType,
    theme: StackChartThemeType
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

  async renderAsync(data?: StackChartDataType): Promise<true> {
    data && super.updateData(data);

    return await new Promise((resolve) => {
      this.render().transitionEnd(resolve);
    });
  }

  private transitionEnd(resolve) {
    const { duration } = super.getConfigByKey('transition');

    return this.rectGroup.call((g) => {
      g.transition()
        .duration(duration)
        .on('end', () => {
          resolve(true);
        });
    });
  }

  render(data?: StackChartDataType): this {
    data && super.updateData(data);

    this.renderScale();
    this.renderRectGroup();
    this.renderTextGroup();
    this.renderContainerGroup();

    return this;
  }

  renderScale() {
    const data = super.getData();
    const innerRect = this.layout.getInnerRect();

    this.yScale = scaleBand(data.map((d) => d.key).reverse(), [
      innerRect.innerTop,
      innerRect.innerBottom,
    ]).paddingInner(0.1);

    return this;
  }

  renderRectGroup() {
    const { duration } = super.getConfigByKey('transition');
    const colorScheme = super.getThemeByKey('colorScheme');
    const data = super.getData();
    const innerRect = this.layout.getInnerRect();

    this.rectGroup.call((g) => {
      g.selectAll('rect')
        .data(data, (d: StackChartItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('rect')
              .attr('x', innerRect.innerLeft)
              .attr('height', this.yScale.bandwidth())
              .attr('y', -this.yScale.bandwidth())
              .attr('width', innerRect.innerWidth)
              .transition()
              .ease(easeCubic)
              .duration(duration)
              .attr('y', (d: StackChartItemType) => this.yScale(d.key))
              .attr('fill', colorScheme[0])
              .attr('height', this.yScale.bandwidth())
              .attr('width', innerRect.innerWidth)
              .selection(),
          (update) =>
            update
              .transition()
              .duration(duration)
              .attr('x', innerRect.innerLeft)
              .attr('y', (d) => this.yScale(d.key))
              .attr('fill', colorScheme[0])
              .attr('height', this.yScale.bandwidth())
              .attr('width', innerRect.innerWidth)
              .selection(),
          (exit) =>
            exit
              .transition()
              .ease(easeCubic)
              .duration(duration)
              .attr('y', -innerRect.innerTop)
              .attr('height', innerRect.innerTop)
              .remove()
        );
    });

    return this;
  }

  renderTextGroup() {
    const { duration } = super.getConfigByKey('transition');
    const text = super.getThemeByKey('text');
    const data = super.getData();
    const innerRect = this.layout.getInnerRect();

    this.textGroup.call((g) => {
      g.selectAll('text')
        .data(data, (d: StackChartItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('text')
              .attr('y', 0)
              .attr('x', () => innerRect.innerLeft)
              .attr('dx', () => innerRect.innerWidth / 2)
              .transition()
              .ease(easeCubic)
              .duration(duration)
              .attr('dx', () => innerRect.innerWidth / 2)
              .attr('y', (d) => this.yScale(d.key))
              .attr('dy', () => this.yScale.bandwidth() / 2)
              .attr('fill', text.color)
              .selection()
              .html((d) => d.name),
          (update) =>
            update
              .transition()
              .duration(duration)
              .attr('x', () => innerRect.innerLeft)
              .attr('dx', () => innerRect.innerWidth / 2)
              .attr('y', (d) => this.yScale(d.key))
              .attr('dy', () => this.yScale.bandwidth() / 2)
              .attr('fill', text.color)
              .selection()
              .html((d) => d.name),
          (exit) =>
            exit
              .transition()
              .ease(easeCubic)
              .duration(duration)
              .attr('y', -innerRect.innerTop / 2)
              .attr('dy', innerRect.innerTop / 2)
              .remove()
        );
    });

    return this;
  }

  renderContainerGroup() {
    const { duration } = super.getConfigByKey('transition');
    const border = super.getThemeByKey('border');
    const innerRect = this.layout.getInnerRect();

    const points = [
      [innerRect.innerLeft, innerRect.innerTop].join(' '),
      [innerRect.innerLeft, innerRect.innerBottom].join(' '),
      [innerRect.innerRight, innerRect.innerBottom].join(' '),
      [innerRect.innerRight, innerRect.innerTop].join(' '),
    ].join(',');

    this.containerGroup
      .selectAll('polyline')
      .data([points])
      .join('polyline')
      .transition()
      .duration(duration)
      .attr('points', (d) => d)
      .attr('fill', 'transparent')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-width', border.width)
      .attr('stroke-linecap', 'linecap')
      .attr('stroke', border.color);
    return this;
  }

  initLayout(): Cartesian2Layout {
    return new Cartesian2Layout(super.getDom(), super.getConfigByKey('layout'));
  }

  initGroup(): void {
    this.rectGroup = this.layout.addGroup();
    this.textGroup = this.layout.addGroup();
    this.containerGroup = this.layout.addGroup();
  }

  destroy(): void {
    super.chartWillDestroyed();
    this.layout.destroy();
    this.textGroup.remove();
    this.rectGroup.remove();

    this.yScale = null;
    this.textGroup = null;
    this.rectGroup = null;

    this.layout = null;

    super.destroy();
    super.chartDidDestroyed();
  }
}

export {
  StackChart,
  StackChartItemType,
  StackChartDataType,
  StackChartConfigType,
  StackChartThemeType,
};
