import {
  max,
  Selection,
  scaleBand,
  scaleLinear,
  ScaleBand,
  ScaleLinear,
} from 'd3';
import { merge } from 'lodash';

import { Cartesian2Layout } from '@dsv-charts/components';

import { Cartesian2InnerRect } from '@dsv-charts/types';

import {
  ArrayChartItemType,
  ArrayChartDataType,
  ArrayChartConfigType,
  ArrayChartThemeType,
} from './type';

import { defaultConfig, defaultTheme } from './default';
import { BaseChart } from '../base';

class ArrayChart extends BaseChart<
  ArrayChartConfigType,
  ArrayChartThemeType,
  ArrayChartDataType
> {
  layout: Cartesian2Layout;
  rectGroup: Selection<SVGGElement, unknown, null, undefined>;
  textGroup: Selection<SVGGElement, unknown, null, undefined>;

  xScale: ScaleBand<string>;
  yScale: ScaleLinear<number, number, never>;

  constructor(
    selector: string | HTMLElement,
    config: ArrayChartConfigType,
    theme: ArrayChartThemeType
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

  render(data?: ArrayChartDataType): this {
    data && super.updateData(data);

    this.renderScale();
    this.renderRectGroup();
    this.renderTextGroup();

    return this;
  }

  async renderAsync(data?: ArrayChartDataType): Promise<true> {
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

  renderScale() {
    const innerRect: Cartesian2InnerRect = this.layout.getInnerRect();
    const data = super.getData();
    this.xScale = scaleBand(
      data.map((d) => d.key),
      [0, innerRect.innerWidth]
    ).padding(0.5);

    const maxValue = max(data, (d: ArrayChartItemType) =>
      typeof d.value === 'number' ? d.value : 100
    );

    this.yScale = scaleLinear(
      [0, maxValue === 0 ? 1 : maxValue],
      [0, innerRect.innerHeight]
    );

    return this;
  }

  renderRectGroup() {
    const innerRect = this.layout.getInnerRect();
    const colorScheme = super.getThemeByKey('colorScheme');
    const { duration } = super.getConfigByKey('transition');
    const data = super.getData();

    this.rectGroup.call((g) => {
      g.selectAll('rect')
        .data(data, (d: ArrayChartItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('rect')
              .attr(
                'x',
                (d: ArrayChartItemType) =>
                  this.xScale(d.key) + innerRect.innerLeft
              )
              .attr('width', this.xScale.bandwidth())
              .attr('height', 0)
              .attr('fill', colorScheme[0])
              .attr('y', () => innerRect.innerHeight + innerRect.innerTop)
              .transition()
              .duration(duration)
              .attr('height', (d: ArrayChartItemType) =>
                typeof d.value === 'number' ? this.yScale(d.value) : 100
              )
              .attr(
                'y',
                (d: ArrayChartItemType) =>
                  innerRect.innerTop +
                  innerRect.innerHeight -
                  (typeof d.value === 'number' ? this.yScale(d.value) : 100)
              )
              .selection(),
          (update) =>
            update
              .transition()
              .duration(duration)
              .attr('fill', colorScheme[0])
              .attr('width', this.xScale.bandwidth())
              .attr('height', (d: ArrayChartItemType) =>
                typeof d.value === 'number' ? this.yScale(d.value) : 100
              )
              .attr(
                'x',
                (d: ArrayChartItemType) =>
                  this.xScale(d.key) + innerRect.innerLeft
              )
              .attr(
                'y',
                (d: ArrayChartItemType) =>
                  innerRect.innerTop +
                  innerRect.innerHeight -
                  (typeof d.value === 'number' ? this.yScale(d.value) : 100)
              )
              .selection(),
          (exit) =>
            exit
              .transition()
              .duration(duration)
              .attr('height', '0')
              .attr('y', () => innerRect.innerTop + innerRect.innerHeight)
              .transition()
              .remove()
        );
    });

    return this;
  }

  renderTextGroup() {
    const innerRect = this.layout.getInnerRect();
    const { color: textColor } = super.getThemeByKey('text');
    const { duration } = super.getConfigByKey('transition');
    const data = super.getData();

    this.textGroup.call((g) => {
      g.selectAll('text')
        .data(data, (d: ArrayChartItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('text')
              .attr('font-size', 20)
              .attr('text-anchor', 'middle')
              .attr('dx', this.xScale.bandwidth() / 2)
              .attr(
                'x',
                (d: ArrayChartItemType) =>
                  this.xScale(d.key) + innerRect.innerLeft
              )
              .attr('dy', 20)
              .attr('y', () => innerRect.innerTop + innerRect.innerHeight),
          (update) => update,
          (exit) =>
            exit
              .transition()
              .duration(duration)
              .attr('opacity', 0)
              .selection()
              .remove()
        )
        .transition()
        .duration(duration)
        .attr(
          'x',
          (d: ArrayChartItemType) => this.xScale(d.key) + innerRect.innerLeft
        )
        .attr('y', () => innerRect.innerTop + innerRect.innerHeight)
        .attr('dx', this.xScale.bandwidth() / 2)
        .attr('dy', 20)
        .attr('fill', textColor)
        .selection()
        .html((d: ArrayChartItemType) => d.name);
    });

    return this;
  }

  initLayout(): Cartesian2Layout {
    return new Cartesian2Layout(super.getDom(), super.getConfigByKey('layout'));
  }

  initGroup(): void {
    this.rectGroup = this.layout.addGroup();
    this.textGroup = this.layout.addGroup();
  }

  destroy(): void {
    super.chartWillDestroyed();
    this.layout.destroy();
    this.textGroup.remove();
    this.rectGroup.remove();

    this.xScale = null;
    this.yScale = null;
    this.textGroup = null;
    this.rectGroup = null;

    this.layout = null;
    this.dom = null;

    super.destroy();
    super.chartDidDestroyed();
  }
}

export {
  ArrayChart,
  ArrayChartItemType,
  ArrayChartDataType,
  ArrayChartConfigType,
  ArrayChartThemeType,
};
