import {
  max,
  Selection,
  scaleBand,
  scaleLinear,
  ScaleBand,
  ScaleLinear,
} from 'd3';
import { merge, cloneDeep } from 'lodash';

import { Cartesian2Layout } from '@dsv-charts/components';
import {
  isFunction,
  isHTMLElement,
  isObject,
  isString,
} from '@dsv-charts/utils/type-check';
import {
  IChartLifeCircle,
  TransitionType,
  Cartesian2LayoutConfigType,
  Cartesian2InnerRect,
} from '@dsv-charts/types';

import {
  QueueChartItemType,
  QueueChartDataType,
  QueueChartConfigType,
  QueueChartThemeType,
  IQueueChart,
} from './type';

import { defaultConfig, defaultTheme } from './default';

class QueueChart implements IQueueChart {
  dom: HTMLElement;
  selector: string | HTMLElement;
  config: QueueChartConfigType;
  theme: QueueChartThemeType;

  layout: Cartesian2Layout;
  rectGroup: Selection<SVGGElement, unknown, null, undefined>;
  textGroup: Selection<SVGGElement, unknown, null, undefined>;

  xScale: ScaleBand<string>;
  yScale: ScaleLinear<number, number, never>;

  constructor(
    selector: string | HTMLElement,
    config: QueueChartConfigType,
    theme: QueueChartThemeType
  ) {
    this.selector = selector;
    this.config = merge({}, defaultConfig, config);
    this.theme = merge({}, defaultTheme, theme);

    this.dom = this.initDom(selector);
    this.layout = this.initLayout();
    this.initGroup();
    this.chartDidChartInit();
  }

  // life circles
  chartDidChartInit(): void {
    const { chartDidChartInit } = this.getConfigByKey(
      'lifeCircle'
    ) as IChartLifeCircle;

    isFunction(chartDidChartInit) &&
      chartDidChartInit(cloneDeep(this.getConfig()), this as QueueChart);
  }

  chartDidDataChanged(): void {
    const { chartDidDataChanged } = this.getConfigByKey(
      'lifeCircle'
    ) as IChartLifeCircle;
    isFunction(chartDidDataChanged) &&
      chartDidDataChanged(cloneDeep(this.getConfig()), this as QueueChart);
  }

  chartWillDataChanged(): void {
    const { chartWillDataChanged } = this.getConfigByKey(
      'lifeCircle'
    ) as IChartLifeCircle;
    isFunction(chartWillDataChanged) &&
      chartWillDataChanged(cloneDeep(this.getConfig()), this as QueueChart);
  }

  chartWillDestroyed(): void {
    const { chartWillDestroyed } = this.getConfigByKey(
      'lifeCircle'
    ) as IChartLifeCircle;
    isFunction(chartWillDestroyed) &&
      chartWillDestroyed(cloneDeep(this.getConfig()), this as QueueChart);
  }

  chartDidDestroyed(): void {
    const { chartDidDestroyed } = this.getConfigByKey(
      'lifeCircle'
    ) as IChartLifeCircle;
    isFunction(chartDidDestroyed) &&
      chartDidDestroyed(cloneDeep(this.getConfig()), this as QueueChart);
  }

  render(data?: QueueChartDataType): this {
    if (data) {
      this.config.data = data;
    }
    this.renderScale();
    this.renderRectGroup();
    this.renderTextGroup();

    return this;
  }

  async renderAsync(data?: QueueChartDataType): Promise<true> {
    if (data) {
      this.config.data = data;
    }
    return await new Promise((resolve) => {
      this.render().transitionEnd(resolve);
    });
  }

  private transitionEnd(resolve) {
    const { duration } = this.getConfigByKey('transition') as TransitionType;

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
    const data = this.getData();
    this.xScale = scaleBand(
      data.map((d) => d.key),
      [0, innerRect.innerWidth]
    ).padding(0.5);

    const maxValue = max(data, (d: QueueChartItemType) =>
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
    const colorScheme = this.getThemeByKey('colorScheme');
    const { duration } = this.getConfigByKey('transition') as TransitionType;

    const data = this.getData();

    this.rectGroup.call((g) => {
      g.selectAll('rect')
        .data(data, (d: QueueChartItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('rect')
              .attr('x', (d) => this.xScale(d.key) + innerRect.innerLeft)
              .attr('width', this.xScale.bandwidth())
              .attr('height', 0)
              .attr('fill', colorScheme[0])
              .attr('y', () => innerRect.innerHeight + innerRect.innerTop)
              .transition()
              .duration(duration)
              .attr('height', (d: QueueChartItemType) =>
                typeof d.value === 'number' ? this.yScale(d.value) : 100
              )
              .attr(
                'y',
                (d: QueueChartItemType) =>
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
              .attr('height', (d: QueueChartItemType) =>
                typeof d.value === 'number' ? this.yScale(d.value) : 100
              )
              .attr('x', (d) => this.xScale(d.key) + innerRect.innerLeft)
              .attr(
                'y',
                (d: QueueChartItemType) =>
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
    const text = this.getThemeByKey('text') as {
      textColor?: string;
    };
    const { duration } = this.getConfigByKey('transition') as TransitionType;

    const data = this.getData();

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
              .attr('x', (d) => this.xScale(d.key) + innerRect.innerLeft)
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
        .attr('x', (d) => this.xScale(d.key) + innerRect.innerLeft)
        .attr('y', () => innerRect.innerTop + innerRect.innerHeight)
        .attr('dx', this.xScale.bandwidth() / 2)
        .attr('dy', 20)
        .attr('fill', text?.textColor)
        .selection()
        .html((d) => d.name);
    });

    return this;
  }

  initDom(selector: string | HTMLElement): HTMLElement {
    if (isString(selector) && isObject(window)) {
      this.dom = window.document.querySelector(`#${selector}`);
    } else if (isHTMLElement(selector)) {
      this.dom = selector;
    }

    return this.dom;
  }

  initLayout(): Cartesian2Layout {
    return new Cartesian2Layout(
      this.dom,
      this.getConfigByKey('layout') as Cartesian2LayoutConfigType
    );
  }

  initGroup(): void {
    this.rectGroup = this.layout.addGroup();
    this.textGroup = this.layout.addGroup();
  }

  getSelector(): string | HTMLElement {
    return this.selector;
  }

  getDom(): HTMLElement {
    return this.dom;
  }

  setData(data: QueueChartDataType): this {
    this.chartWillDataChanged();
    this.config.data = data;
    this.chartDidDataChanged();
    return this;
  }

  getData(): QueueChartDataType {
    return this.config.data;
  }

  setConfig(config: QueueChartConfigType): this {
    this.config = config;
    return this;
  }

  getConfig(): QueueChartConfigType {
    return this.config;
  }

  setTheme(theme: QueueChartThemeType): this {
    this.theme = theme;
    return this;
  }

  getTheme(): QueueChartThemeType {
    return this.theme;
  }

  getConfigByKey(key: keyof QueueChartConfigType) {
    if (key in this.config) {
      return this.config[key];
    }

    throw new Error(`Key does not exist:${key}`);
  }

  getThemeByKey(key: keyof QueueChartThemeType) {
    if (key in this.theme) {
      return this.theme[key];
    }

    throw new Error(`Key does not exist:${key}`);
  }

  destroy(): void {
    this.chartWillDestroyed();
    this.layout.destroy();
    this.textGroup.remove();
    this.rectGroup.remove();

    this.xScale = null;
    this.yScale = null;
    this.textGroup = null;
    this.rectGroup = null;

    this.layout = null;
    this.dom = null;
    this.config = null;
    this.theme = null;
    this.selector = null;
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
