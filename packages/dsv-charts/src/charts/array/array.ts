import {
  IConfig,
  Cartesian2LayoutType,
  DataType,
  ArrayItemType,
  ArrayDataType,
} from '@dsv-charts/typings/config';
import { BaseChart } from '../base';
import { Cartesian2Layout } from '@dsv-charts/layouts/cartesian2';
import { scaleBand, scaleLinear, ScaleBand, ScaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { Selection } from 'd3-selection';
import 'd3-transition';

export class ArrayChart extends BaseChart {
  private _layout: Cartesian2Layout;
  private _data: DataType;
  private _xScale: ScaleBand<string>;
  private _yScale: ScaleLinear<number, number, never>;
  private _rectGroup: Selection<SVGGElement, unknown, null, undefined>;
  private _textGroup: Selection<SVGGElement, unknown, null, undefined>;

  constructor(selector: string | HTMLElement, customConfig: IConfig) {
    super(selector, customConfig);

    this._layout = new Cartesian2Layout(
      super.getDom(),
      super.getConfigByKey('layout') as Cartesian2LayoutType
    );

    this._rectGroup = this._layout.addGroup();
    this._textGroup = this._layout.addGroup();

    this._data = super.getConfigByKey('data') as DataType;
  }

  protected updateData(data: ArrayDataType): void {
    super.updateData(data);
    this._data = super.getConfigByKey('data') as DataType;

    this.render();
  }

  protected updateConfig(customConfig: IConfig): void {
    super.updateConfig(customConfig);
    this._data = super.getConfigByKey('data') as DataType;

    this.render();
  }

  protected render() {
    this._layout.render(this.getConfigByKey('layout') as Cartesian2LayoutType);
    this.renderScale();
    this.renderRectGroup();
    this.renderTextGroup();
  }

  protected renderScale() {
    const innerRect = this._layout.getInnerRect();

    this._xScale = scaleBand(
      this._data.map((d) => d.key),
      [0, innerRect.innerWidth]
    ).padding(0.5);

    this._yScale = scaleLinear(
      [0, max(this._data, (d) => d.value)],
      [0, innerRect.innerHeight]
    );
  }

  protected renderRectGroup() {
    const innerRect = this._layout.getInnerRect();
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
              .attr('fill', 'red')
              .attr('y', () => innerRect.innerHeight + innerRect.innerTop)
              .transition()
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
              .attr('fill', 'red')
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
              .attr('height', '0')
              .attr('y', () => innerRect.innerTop + innerRect.innerHeight)
              .transition()
              .remove()
        );
    });
  }

  protected renderTextGroup() {
    const innerRect = this._layout.getInnerRect();

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
          (exit) => exit.transition().attr('opacity', 0).transition().remove()
        )
        .transition()
        .attr('x', (d) => this._xScale(d.key) + innerRect.innerLeft)
        .attr('y', () => innerRect.innerTop + innerRect.innerHeight)
        .selection()
        .html((d) => d.name);
    });
  }

  protected destroy() {
    console.log('destroy ArrayChart');

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
