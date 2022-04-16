import { isNumber, isString } from '@dsv-charts/utils/type-check';
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
    const data = super.getConfigByKey('data');

    this.xScale = scaleBand(
      data.map((d) => d.key),
      [0, innerRect.innerWidth]
    ).padding(0.5);

    const maxValue = max(data, (d: ArrayChartItemType) =>
      isNumber(d.value) ? d.value : 100
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
    const data = super.getConfigByKey('data');

    const fill = (d: ArrayChartItemType) => {
      if (isString(d.state)) {
        return d.state;
      }
      return colorScheme[0];
    };

    const height = (d: ArrayChartItemType) => {
      if (isNumber(d.value)) {
        return this.yScale(d.value);
      }

      return 100;
    };

    const width = () => {
      return this.xScale.bandwidth();
    };

    const x = (d: ArrayChartItemType) =>
      this.xScale(d.key) + innerRect.innerLeft;

    const y = (d: ArrayChartItemType) => {
      return innerRect.innerTop + innerRect.innerHeight - height(d);
    };

    this.rectGroup.call((g) => {
      g.selectAll('rect')
        .data(data, (d: ArrayChartItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('rect')
              .attr('fill', fill)
              .attr('x', x)
              .attr('y', innerRect.innerHeight + innerRect.innerTop)
              .attr('width', width)
              .attr('height', 0)
              .transition()
              .duration(duration)
              .attr('height', height)
              .attr('y', y)
              .selection(),
          (update) =>
            update
              .transition()
              .duration(duration)
              .attr('fill', fill)
              .attr('x', x)
              .attr('y', y)
              .attr('width', width)
              .attr('height', height)
              .selection(),
          (exit) =>
            exit
              .transition()
              .duration(duration)
              .attr('height', '0')
              .attr('y', innerRect.innerTop + innerRect.innerHeight)
              .remove()
        );
    });

    return this;
  }

  renderTextGroup() {
    const innerRect = this.layout.getInnerRect();
    const text = super.getThemeByKey('text');
    const { duration } = super.getConfigByKey('transition');
    const data = super.getConfigByKey('data');

    const x = (d: ArrayChartItemType) => {
      return this.xScale(d.key) + innerRect.innerLeft;
    };
    const y = () => {
      return innerRect.innerTop + innerRect.innerHeight;
    };

    this.textGroup.call((g) => {
      g.selectAll('text')
        .data(data, (d: ArrayChartItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('text')
              .attr('x', x)
              .attr('y', y)
              .attr('dy', 20)
              .attr('dx', this.xScale.bandwidth() / 2)
              .attr('fill', text.color)
              .attr('font-size', text.size)
              .attr('text-anchor', 'middle')
              .html((d: ArrayChartItemType) => d.name),
          (update) =>
            update
              .transition()
              .duration(duration)
              .attr('x', x)
              .attr('dx', this.xScale.bandwidth() / 2)
              .attr('y', y)
              .attr('dy', 20)
              .selection()
              .html((d: ArrayChartItemType) => d.name),
          (exit) =>
            exit.attr('opacity', 1).transition().attr('opacity', 0).remove()
        );
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
