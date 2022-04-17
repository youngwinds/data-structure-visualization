import { Selection, scaleBand, ScaleBand } from 'd3';
import { merge } from 'lodash';

import { Cartesian2Layout } from '@dsv-charts/components';

import {
  QueueChartItemType,
  QueueChartDataType,
  QueueChartConfigType,
  QueueChartThemeType,
} from './type';

import { defaultConfig, defaultTheme } from './default';
import { BaseChart } from '../base';

class QueueChart extends BaseChart<
  QueueChartConfigType,
  QueueChartThemeType,
  QueueChartDataType
> {
  layout: Cartesian2Layout;
  rectGroup: Selection<SVGGElement, unknown, null, undefined>;
  textGroup: Selection<SVGGElement, unknown, null, undefined>;
  containerGroup: Selection<SVGGElement, unknown, null, undefined>;

  xScale: ScaleBand<string>;

  constructor(
    selector: string | HTMLElement,
    config: QueueChartConfigType,
    theme: QueueChartThemeType
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

  async renderAsync(data?: QueueChartDataType): Promise<true> {
    data && super.updateData(data);

    return await new Promise((resolve) => {
      this.render().transitionEnd(resolve);
    });
  }

  private transitionEnd(resolve) {
    const { duration } = this.getConfigByKey('transition');

    return this.rectGroup.call((g) => {
      g.transition()
        .duration(duration)
        .on('end', () => {
          resolve(true);
        });
    });
  }

  render(data?: QueueChartDataType): this {
    data && super.updateData(data);

    this.renderScale();
    this.renderRectGroup();
    this.renderTextGroup();
    this.renderContainerGroup();

    return this;
  }

  renderScale() {
    const innerRect = this.layout.getInnerRect();
    const data = super.getData() as QueueChartDataType;

    this.xScale = scaleBand(
      data.map((d) => d.key),
      [0, innerRect.innerWidth]
    ).padding(0.01);

    return this;
  }

  renderRectGroup() {
    const { duration } = super.getConfigByKey('transition');
    const colorScheme = super.getThemeByKey('colorScheme');
    const data = super.getData() as QueueChartDataType;
    const innerRect = this.layout.getInnerRect();
    const rect = this.layout.getRect();

    this.rectGroup.call((g) => {
      g.selectAll('rect')
        .data(data, (d: QueueChartItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('rect')
              .attr('x', innerRect.innerRight)
              .attr('width', this.xScale.bandwidth())
              .attr('height', 50)
              .attr('fill', colorScheme[0])
              .attr('y', () => rect.center[1] - 50)
              .transition()
              .duration(duration)
              .attr('height', 50)
              .attr('y', () => rect.center[1] - 50)
              .attr(
                'x',
                (d: QueueChartItemType) =>
                  this.xScale(d.key) + innerRect.innerLeft
              )
              .selection(),
          (update) =>
            update
              .transition()
              .duration(duration)
              .attr('fill', colorScheme[0])
              .attr('width', this.xScale.bandwidth())
              .attr('height', 50)
              .attr(
                'x',
                (d: QueueChartItemType) =>
                  this.xScale(d.key) + innerRect.innerLeft
              )
              .attr('y', () => rect.center[1] - 50)
              .selection(),
          (exit) =>
            exit
              .attr('opacity', 1)
              .transition()
              .duration(duration)
              .attr('opacity', 0)
              .attr('x', -rect.right)
              .attr('y', rect.center[1] - 50)
              .transition()
              .remove()
        );
    });

    return this;
  }

  renderTextGroup() {
    const { duration } = super.getConfigByKey('transition');
    const text = super.getThemeByKey('text');
    const data = super.getData() as QueueChartDataType;
    const rect = this.layout.getRect();
    const innerRect = this.layout.getInnerRect();

    this.textGroup.call((g) => {
      g.selectAll('text')
        .data(data, (d: QueueChartItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('text')
              .attr('font-size', 20)
              .attr('text-anchor', 'middle')
              .attr('dx', this.xScale.bandwidth() / 2)
              .attr('dy', 20)
              .attr('x', rect.right)
              .attr('y', () => rect.center[1])
              .transition()
              .attr(
                'x',
                (d: QueueChartItemType) =>
                  this.xScale(d.key) + innerRect.innerLeft
              )
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
        .attr(
          'x',
          (d: QueueChartItemType) => this.xScale(d.key) + innerRect.innerLeft
        )
        .attr('y', () => rect.center[1])
        .attr('dx', this.xScale.bandwidth() / 2)
        .attr('dy', 20)
        .attr('fill', text?.color)
        .selection()
        .html((d: QueueChartItemType) => d.name);
    });

    return this;
  }

  renderContainerGroup() {
    const { duration } = super.getConfigByKey('transition');
    const arrow = super.getThemeByKey('arrow');
    const innerRect = this.layout.getInnerRect();
    const rect = this.layout.getRect();

    const points = [
      [innerRect.innerLeft + 25, rect.center[1] - 85 - 25].join(' '),
      [innerRect.innerLeft, rect.center[1] - 75 - 25].join(' '),
      [innerRect.innerLeft + 25, rect.center[1] - 65 - 25].join(' '),
      [innerRect.innerLeft, rect.center[1] - 75 - 25].join(' '),
      [innerRect.innerRight, rect.center[1] - 75 - 25].join(' '),
    ].join(',');

    this.containerGroup
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

  initLayout(): Cartesian2Layout {
    return new Cartesian2Layout(super.getDom(), super.getConfigByKey('layout'));
  }

  initGroup(): void {
    this.rectGroup = this.layout.addGroup();
    this.textGroup = this.layout.addGroup();
    this.containerGroup = this.layout.addGroup();
  }

  destroy(): void {
    this.chartWillDestroyed();
    this.layout.destroy();
    this.textGroup.remove();
    this.rectGroup.remove();

    this.xScale = null;
    this.textGroup = null;
    this.rectGroup = null;

    this.layout = null;

    super.destroy();
    this.chartDidDestroyed();
  }
}

export {
  QueueChart,
  QueueChartItemType,
  QueueChartDataType,
  QueueChartConfigType,
  QueueChartThemeType,
};
