import { BorderType } from './../../typings/theme/index';
import 'd3-transition';
import { easeCubic } from 'd3-ease';
import { scaleBand, ScaleBand } from 'd3-scale';
import { Selection } from 'd3-selection';
import { BaseChart } from '../base';
import { Cartesian2Layout } from '@dsv-charts/layouts/cartesian2';

import {
  IConfig,
  Cartesian2LayoutType,
  StackItemType,
  StackDataType,
  ITheme,
  TextType,
  TransitionType,
} from '@dsv-charts/typings';

export class StackChart extends BaseChart {
  private _layout: Cartesian2Layout;
  private _data: StackDataType;
  private _yScale: ScaleBand<string>;
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

    this._data = super.getConfigByKey('data') as StackDataType;
  }

  public setData(data: StackDataType, ignoreLifeCircle = false) {
    super.setData(data, ignoreLifeCircle);
    this._data = super.getConfigByKey('data') as StackDataType;
  }

  public setConfig(customConfig: IConfig): void {
    super.setConfig(customConfig);
    this._data = super.getConfigByKey('data') as StackDataType;
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

    this._yScale = scaleBand(this._data.map((d) => d.key).reverse(), [
      innerRect.innerTop,
      innerRect.innerBottom,
    ]).paddingInner(0.1);

    return this;
  }

  private renderRectGroup() {
    const innerRect = this._layout.getInnerRect();
    const colorScheme = this.getThemeByKey('colorScheme');
    const { duration } = this.getConfigByKey('transition') as TransitionType;

    this._rectGroup.call((g) => {
      g.selectAll('rect')
        .data(this._data, (d: StackItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('rect')
              .attr('x', innerRect.innerRight)
              .attr('y', 0)
              .attr('width', innerRect.innerWidth)
              .attr('height', 0)
              .attr('fill', 'opacity')
              .transition()
              .ease(easeCubic)
              .duration(duration)
              .attr('fill', colorScheme[0])
              .attr('x', innerRect.innerLeft)
              .attr('height', innerRect.innerTop)
              .transition()
              .attr('x', innerRect.innerLeft)
              .attr('y', (d) => this._yScale(d.key))
              .attr('fill', colorScheme[0])
              .attr('height', this._yScale.bandwidth())
              .attr('width', innerRect.innerWidth)
              .selection(),
          (update) =>
            update
              .transition()
              .duration(duration)
              .attr('x', innerRect.innerLeft)
              .attr('y', (d) => this._yScale(d.key))
              .attr('fill', colorScheme[0])
              .attr('height', this._yScale.bandwidth())
              .attr('width', innerRect.innerWidth)
              .selection(),
          (exit) =>
            exit
              .transition()
              .ease(easeCubic)
              .duration(duration)
              .attr('fill', colorScheme[0])
              .attr('x', innerRect.innerLeft)
              .attr('y', 0)
              .attr('height', innerRect.innerTop)
              .transition()
              .attr('x', 0)
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
        .data(this._data, (d: StackItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('text')
              .transition()
              .ease(easeCubic)
              .duration(duration)
              .attr('x', () => innerRect.innerRight)
              .transition()
              .attr('x', () => innerRect.innerLeft)
              .attr('dx', () => innerRect.innerWidth / 2)
              .attr('y', (d) => this._yScale(d.key))
              .attr('dy', (d) => this._yScale.bandwidth() / 2)
              .attr('fill', text.textColor)
              .selection()
              .html((d) => d.name),
          (update) =>
            update
              .transition()
              .duration(duration)
              .attr('x', () => innerRect.innerLeft)
              .attr('dx', () => innerRect.innerWidth / 2)
              .attr('y', (d) => this._yScale(d.key))
              .attr('dy', (d) => this._yScale.bandwidth() / 2)
              .attr('fill', text.textColor)
              .selection()
              .html((d) => d.name),
          (exit) =>
            exit
              .transition()
              .ease(easeCubic)
              .duration(duration)
              .attr('x', innerRect.innerLeft)
              .attr('y', 0)
              .attr('dy', innerRect.innerTop / 2)
              .transition()
              .attr('x', 0)
              .remove()
        );
    });

    return this;
  }

  private renderContainerGroup() {
    const innerRect = this._layout.getInnerRect();
    const border = this.getThemeByKey('border') as BorderType;

    const { duration } = this.getConfigByKey('transition');

    const points = [
      [innerRect.innerLeft, innerRect.innerTop].join(' '),
      [innerRect.innerLeft, innerRect.innerBottom].join(' '),
      [innerRect.innerRight, innerRect.innerBottom].join(' '),
      [innerRect.innerRight, innerRect.innerTop].join(' '),
    ].join(',');

    this._containerGroup
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

  private transitionEnd(resolve) {
    const { duration } = this.getConfigByKey('transition');

    return this._rectGroup
      .transition()
      .duration(duration)
      .transition()
      .on('end', () => {
        resolve();
      });
  }

  public destroy() {
    this._layout.destroy();
    this._textGroup.remove();
    this._rectGroup.remove();
    this._containerGroup.remove();

    this._yScale = null;
    this._data = null;
    this._layout = null;
    this._textGroup = null;
    this._rectGroup = null;
    this._containerGroup = null;
  }
}
