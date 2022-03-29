import 'd3-transition';
import { scaleBand, scaleLinear, ScaleBand, ScaleLinear } from 'd3-scale';
import { Selection } from 'd3-selection';
import { max } from 'd3-array';
import { BaseChart } from '../base';
import { Cartesian2Layout } from '@dsv-charts/layouts/cartesian2';

import {
  IConfig,
  Cartesian2LayoutType,
  ArrayItemType,
  ArrayDataType,
  ITheme,
  TextType,
} from '@dsv-charts/typings';

export class ArrayChart extends BaseChart {
  private _layout: Cartesian2Layout;
  private _data: ArrayDataType;
  private _xScale: ScaleBand<string>;
  private _yScale: ScaleLinear<number, number, never>;
  private _rectGroup: Selection<SVGGElement, unknown, null, undefined>;
  private _textGroup: Selection<SVGGElement, unknown, null, undefined>;

  constructor(
    selector: string | HTMLElement,
    customConfig: IConfig,
    customTheme: ITheme
  ) {
    super(selector, customConfig, customTheme);

    this._layout = new Cartesian2Layout(
      super.getDom(),
      super.getConfigByKey('layout') as Cartesian2LayoutType
    );

    this._rectGroup = this._layout.addGroup();
    this._textGroup = this._layout.addGroup();

    this._data = super.getConfigByKey('data') as ArrayDataType;
  }

  public setData(data: ArrayDataType, ignoreLifeCircle = false) {
    super.setData(data, ignoreLifeCircle);
    this._data = super.getConfigByKey('data') as ArrayDataType;
  }

  public setConfig(customConfig: IConfig): void {
    super.setConfig(customConfig);
    this._data = super.getConfigByKey('data') as ArrayDataType;
  }

  public async renderAsync() {
    return await new Promise((resolve) => {
      this.render().transitionEnd(resolve);
    });
  }

  public render() {
    this._layout.render(this.getConfigByKey('layout') as Cartesian2LayoutType);
    this.renderScale().renderRectGroup().renderTextGroup();
    return this;
  }

  private renderScale() {
    const innerRect = this._layout.getInnerRect();

    this._xScale = scaleBand(
      this._data.map((d) => d.key),
      [0, innerRect.innerWidth]
    ).padding(0.5);

    this._yScale = scaleLinear(
      [0, max(this._data, (d) => d.value)],
      [0, innerRect.innerHeight]
    );

    return this;
  }

  private renderRectGroup() {
    const innerRect = this._layout.getInnerRect();
    const colorScheme = this.getThemeByKey('colorScheme');
    const { duration } = this.getConfigByKey('transition');

    this._rectGroup.call((g) => {
      g.selectAll('rect')
        .data(this._data, (d: ArrayItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('rect')
              .attr('x', (d) => this._xScale(d.key) + innerRect.innerLeft)
              .attr('width', this._xScale.bandwidth())
              .attr('height', 0)
              .attr('fill', colorScheme[0])
              .attr('y', () => innerRect.innerHeight + innerRect.innerTop)
              .transition()
              .duration(duration)
              .attr('height', (d) => this._yScale(d.value))
              .attr(
                'y',
                (d) =>
                  innerRect.innerTop +
                  innerRect.innerHeight -
                  this._yScale(d.value)
              )
              .selection(),
          (update) =>
            update
              .transition()
              .duration(duration)
              .attr('fill', colorScheme[0])
              .attr('width', this._xScale.bandwidth())
              .attr('height', (d) => this._yScale(d.value))
              .attr('x', (d) => this._xScale(d.key) + innerRect.innerLeft)
              .attr(
                'y',
                (d) =>
                  innerRect.innerTop +
                  innerRect.innerHeight -
                  this._yScale(d.value)
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

  private renderTextGroup() {
    const innerRect = this._layout.getInnerRect();
    const text = this.getThemeByKey('text') as TextType;
    const { duration } = this.getConfigByKey('transition');

    this._textGroup.call((g) => {
      g.selectAll('text')
        .data(this._data, (d: ArrayItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('text')
              .attr('font-size', 20)
              .attr('text-anchor', 'middle')
              .attr('dx', this._xScale.bandwidth() / 2)
              .attr('x', (d) => this._xScale(d.key) + innerRect.innerLeft)
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
        .attr('x', (d) => this._xScale(d.key) + innerRect.innerLeft)
        .attr('y', () => innerRect.innerTop + innerRect.innerHeight)
        .attr('dx', this._xScale.bandwidth() / 2)
        .attr('dy', 20)
        .attr('fill', text.textColor)
        .selection()
        .html((d) => d.name);
    });

    return this;
  }

  private transitionEnd(resolve) {
    const { duration } = this.getConfigByKey('transition');

    return this._rectGroup
      .transition()
      .duration(duration)
      .on('end', () => {
        resolve();
      });
  }

  public destroy() {
    this._layout.destroy();
    this._textGroup.remove();
    this._rectGroup.remove();

    this._xScale = null;
    this._yScale = null;
    this._data = null;
    this._layout = null;
    this._textGroup = null;
    this._rectGroup = null;
  }
}
