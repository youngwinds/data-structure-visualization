import { isString, isNumber } from '@dsv-charts/utils/type-check';
import { Selection, scaleBand, ScaleBand, ScalePoint, scalePoint } from 'd3';
import { merge } from 'lodash';

import { Cartesian2Layout } from '@dsv-charts/components';

import {
  MatrixItemType,
  MatrixDataType,
  MatrixConfigType,
  MatrixThemeType,
} from './type';

import { defaultConfig, defaultTheme } from './default';
import { BaseChart } from '../base';

class MatrixChart extends BaseChart<
  MatrixConfigType,
  MatrixThemeType,
  MatrixDataType
> {
  layout: Cartesian2Layout;
  circlesGroup: Selection<SVGGElement, unknown, null, undefined>;
  textsGroup: Selection<SVGGElement, unknown, null, undefined>;

  xScale: ScaleBand<string>;
  yScale: ScaleBand<string>;

  constructor(
    selector: string | HTMLElement,
    config: MatrixConfigType,
    theme: MatrixThemeType
  ) {
    super(
      selector,
      merge({}, defaultConfig, config),
      merge({}, defaultTheme, theme)
    );

    this.layout = this.initLayout();
    this.initGroup();
    this.chartDidChartInit();
  }

  initLayout(): Cartesian2Layout {
    return new Cartesian2Layout(super.getDom(), super.getConfigByKey('layout'));
  }

  initGroup(): void {
    this.circlesGroup = this.layout.addGroup();
    this.textsGroup = this.layout.addGroup();
  }

  async renderAsync(data?: MatrixDataType): Promise<true> {
    data && super.updateData(data);

    return await new Promise((resolve) => {
      this.render().transitionEnd(resolve);
    });
  }

  private transitionEnd(resolve) {
    const { duration } = this.getConfigByKey('transition');

    return this.circlesGroup.call((g) => {
      g.transition()
        .duration(duration)
        .on('end', () => {
          resolve(true);
        });
    });
  }

  render(data?: MatrixDataType): this {
    data && super.updateData(data);

    this.renderScale();
    this.renderCircles();
    this.renderTexts();
    return this;
  }

  renderScale(): this {
    const data = super.getConfigByKey('data');
    const innerRect = this.layout.getInnerRect();
    this.yScale = scaleBand()
      .domain(data.map((d, i) => String(i)))
      .range([innerRect.innerTop, innerRect.innerBottom])
      .padding(0.075);

    this.xScale = scaleBand()
      .domain(data[0].map((d, i) => String(i)))
      .range([innerRect.innerLeft, innerRect.innerRight])
      .padding(0.075);

    return this;
  }

  renderCircles(): this {
    const colorScheme = this.getThemeByKey('colorScheme');
    const { duration } = this.getConfigByKey('transition');
    const border = this.getThemeByKey('border');
    const data = super.getConfigByKey('data');

    const r = () => {
      let result =
        Math.min(this.yScale.bandwidth(), this.xScale.bandwidth()) / 2;

      if (isString(border.width)) {
        result = result - parseFloat(border.width) / 2;
      } else if (isNumber(border.width)) {
        result = result - border.width / 2;
      }

      return result;
    };

    const stroke = (d: MatrixItemType) => {
      if (d.state) {
        return d.state;
      }
      return colorScheme[0];
    };

    this.circlesGroup
      .selectAll('g')
      .data(data)
      .join('g')
      .attr('transform', (d, i) => `translate(0,${this.yScale(i.toString())})`)
      .selectAll('circle')
      .data(
        (d: MatrixItemType[]) => d,
        (d: MatrixItemType) => d.name
      )
      .join(
        (enter) =>
          enter
            .append('circle')
            .attr('r', 0)
            .attr(
              'cx',
              (d, i) =>
                (this.xScale.bandwidth() >> 1) + this.xScale(i.toString())
            )
            .attr('cy', this.yScale.bandwidth() >> 1)
            .transition()
            .duration(duration)
            .attr('r', r)
            .attr('stroke', stroke)
            .attr('stroke-width', border.width)
            .attr('fill', '#ffffff'),
        (update) =>
          update
            .transition()
            .duration(duration)
            .attr('stroke', stroke)
            .attr(
              'cx',
              (d, i) =>
                (this.xScale.bandwidth() >> 1) + this.xScale(i.toString())
            )
            .attr('cy', this.yScale.bandwidth() >> 1),

        (exit) => exit.transition().duration(duration).remove()
      );

    return this;
  }

  renderTexts(): this {
    const text = this.getThemeByKey('text');
    const { duration } = this.getConfigByKey('transition');
    const data = super.getConfigByKey('data');

    this.circlesGroup
      .selectAll('g')
      .data(data)
      .join('g')
      .attr('transform', (d, i) => `translate(0,${this.yScale(i.toString())})`)
      .selectAll('text')
      .data(
        (d: MatrixItemType[]) => d,
        (d: MatrixItemType) => d.name
      )
      .join(
        (enter) =>
          enter
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr(
              'x',
              (d, i) =>
                (this.xScale.bandwidth() >> 1) + this.xScale(i.toString())
            )
            .attr('y', this.yScale.bandwidth() >> 1)
            .transition()
            .duration(duration)
            .attr('fill', text.color)
            .selection()
            .html((d: MatrixItemType) => d.name),
        (update) =>
          update
            .transition()
            .duration(duration)
            .attr(
              'x',
              (d, i) =>
                (this.xScale.bandwidth() >> 1) + this.xScale(i.toString())
            )
            .attr('y', this.yScale.bandwidth() >> 1)
            .transition(),
        (exit) => exit.transition().duration(duration).remove()
      );
    return this;
  }

  destroy(): void {
    this.chartWillDestroyed();
    this.layout.destroy();
    this.textsGroup.remove();
    this.circlesGroup.remove();

    this.textsGroup = null;
    this.circlesGroup = null;

    this.layout = null;

    super.destroy();
    this.chartDidDestroyed();
  }
}

export {
  MatrixChart,
  MatrixItemType,
  MatrixDataType,
  MatrixConfigType,
  MatrixThemeType,
};
