import { ArrowType } from './../../typings/theme/index';
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

export class QueueChart extends BaseChart {
  private _layout: Cartesian2Layout;
  private _data: ArrayDataType;
  private _xScale: ScaleBand<string>;
  private _rectGroup: Selection<SVGGElement, unknown, null, undefined>;
  private _textGroup: Selection<SVGGElement, unknown, null, undefined>;
  private _containerGroup: Selection<SVGGElement, unknown, null, undefined>;

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
    this._containerGroup = this._layout.addGroup();

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
    this.renderScale()
      .renderRectGroup()
      .renderTextGroup()
      .renderContainerGroup();
    return this;
  }

  private renderScale() {
    const innerRect = this._layout.getInnerRect();

    this._xScale = scaleBand(
      this._data.map((d) => d.key),
      [0, innerRect.innerWidth]
    ).padding(0.01);

    return this;
  }

  private renderRectGroup() {
    const innerRect = this._layout.getInnerRect();
    const rect = this._layout.getRect();
    const colorScheme = this.getThemeByKey('colorScheme');
    const { duration } = this.getConfigByKey('transition');

    this._rectGroup.call((g) => {
      g.selectAll('rect')
        .data(this._data, (d: ArrayItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('rect')
              .attr('x', innerRect.innerRight)
              .attr('width', this._xScale.bandwidth())
              .attr('height', 50)
              .attr('fill', colorScheme[0])
              .attr('y', () => rect.center[1] - 50)
              .transition()
              .duration(duration)
              .attr('height', 50)
              .attr('y', () => rect.center[1] - 50)
              .attr('x', (d) => this._xScale(d.key) + innerRect.innerLeft)
              .selection(),
          (update) =>
            update
              .transition()
              .duration(duration)
              .attr('fill', colorScheme[0])
              .attr('width', this._xScale.bandwidth())
              .attr('height', 50)
              .attr('x', (d) => this._xScale(d.key) + innerRect.innerLeft)
              .attr('y', () => rect.center[1] - 50)
              .selection(),
          (exit) =>
            exit
              .attr('opacity', 1)
              .transition()
              .duration(duration)
              .attr('opacity', 0)
              .attr('x', -rect.right)
              .attr('y', rect.center[0] - 50)
              .transition()
              .remove()
        );
    });

    return this;
  }

  private renderTextGroup() {
    const innerRect = this._layout.getInnerRect();
    const rect = this._layout.getRect();
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
              .attr('dy', 20)
              .attr('x', rect.right)
              .attr('y', () => rect.center[1])
              .transition()
              .attr('x', (d) => this._xScale(d.key) + innerRect.innerLeft)
              .attr('y', () => rect.center[1]),
          (update) => update,
          (exit) =>
            exit
              .transition()
              .duration(duration)
              .attr('x', -rect.right)
              .attr('y', rect.center[1])
              .remove()
        )
        .transition()
        .duration(duration)
        .attr('x', (d) => this._xScale(d.key) + innerRect.innerLeft)
        .attr('y', () => rect.center[1])
        .attr('dx', this._xScale.bandwidth() / 2)
        .attr('dy', 20)
        .attr('fill', text.textColor)
        .selection()
        .html((d) => d.name);
    });

    return this;
  }

  private renderContainerGroup() {
    const innerRect = this._layout.getInnerRect();
    const rect = this._layout.getRect();

    const arrow = this.getThemeByKey('arrow') as ArrowType;

    const { duration } = this.getConfigByKey('transition');

    const points = [
      [innerRect.innerLeft + 25, rect.center[1] - 85 - 25].join(' '),
      [innerRect.innerLeft, rect.center[1] - 75 - 25].join(' '),
      [innerRect.innerLeft + 25, rect.center[1] - 65 - 25].join(' '),
      [innerRect.innerLeft, rect.center[1] - 75 - 25].join(' '),
      [innerRect.innerRight, rect.center[1] - 75 - 25].join(' '),
    ].join(',');

    this._containerGroup
      .selectAll('polyline')
      .data([points])
      .join('polyline')
      .transition()
      .duration(duration)
      .attr('points', (d) => d)
      .attr('fill', 'transparent')
      .attr('stroke-width', arrow.width)
      .attr('stroke', arrow.color);
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
    this._containerGroup.remove();

    this._xScale = null;
    this._data = null;
    this._layout = null;
    this._textGroup = null;
    this._rectGroup = null;
  }
}
