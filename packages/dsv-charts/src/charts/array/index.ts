import {
  max,
  Selection,
  scaleBand,
  scaleLinear,
  ScaleBand,
  ScaleLinear,
} from 'd3';
import { merge, cloneDeep } from 'lodash';

import {
  isFunction,
  isHTMLElement,
  isObject,
  isString,
} from '@dsv-charts/utils/type-check';
import {
  Cartesian2Layout,
  Cartesian2LayoutConfigType,
  Cartesian2InnerRect,
} from '@dsv-charts/layouts/index';
import { IChartLifeCircle, TransitionType } from '@dsv-charts/types';

import {
  ArrayChartItemType,
  ArrayChartDataType,
  ArrayChartConfigType,
  ArrayChartThemeType,
  IArrayChart,
} from './type';

import { defaultConfig, defaultTheme } from './default';

class ArrayChart implements IArrayChart {
  dom: HTMLElement;
  selector: string | HTMLElement;
  config: ArrayChartConfigType;
  theme: ArrayChartThemeType;

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
      chartDidChartInit(cloneDeep(this.getConfig()), this as ArrayChart);
  }

  chartDidDataChanged(): void {
    const { chartDidDataChanged } = this.getConfigByKey(
      'lifeCircle'
    ) as IChartLifeCircle;
    isFunction(chartDidDataChanged) &&
      chartDidDataChanged(cloneDeep(this.getConfig()), this as ArrayChart);
  }

  chartWillDataChanged(): void {
    const { chartWillDataChanged } = this.getConfigByKey(
      'lifeCircle'
    ) as IChartLifeCircle;
    isFunction(chartWillDataChanged) &&
      chartWillDataChanged(cloneDeep(this.getConfig()), this as ArrayChart);
  }

  chartWillDestroyed(): void {
    const { chartWillDestroyed } = this.getConfigByKey(
      'lifeCircle'
    ) as IChartLifeCircle;
    isFunction(chartWillDestroyed) &&
      chartWillDestroyed(cloneDeep(this.getConfig()), this as ArrayChart);
  }

  chartDidDestroyed(): void {
    const { chartDidDestroyed } = this.getConfigByKey(
      'lifeCircle'
    ) as IChartLifeCircle;
    isFunction(chartDidDestroyed) &&
      chartDidDestroyed(cloneDeep(this.getConfig()), this as ArrayChart);
  }

  render(data?: ArrayChartDataType): this {
    if (data) {
      this.config.data = data;
    }
    this.renderScale();
    this.renderRectGroup();
    this.renderTextGroup();

    return this;
  }

  async renderAsync(data?: ArrayChartDataType): Promise<true> {
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

    this.yScale = scaleLinear(
      [
        0,
        max(data, (d: ArrayChartItemType) =>
          typeof d.value === 'number' ? d.value : 100
        ),
      ],
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
        .data(data, (d: ArrayChartItemType) => d.key)
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
              .attr('x', (d) => this.xScale(d.key) + innerRect.innerLeft)
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
    const text = this.getThemeByKey('text') as {
      textColor?: string;
    };
    const { duration } = this.getConfigByKey('transition') as TransitionType;

    const data = this.getData();

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

  setData(data: ArrayChartDataType): this {
    this.chartWillDataChanged();
    this.config.data = data;
    this.chartDidDataChanged();
    return this;
  }

  getData(): ArrayChartDataType {
    return this.config.data;
  }

  setConfig(config: ArrayChartConfigType): this {
    this.config = config;
    return this;
  }

  getConfig(): ArrayChartConfigType {
    return this.config;
  }

  setTheme(theme: ArrayChartThemeType): this {
    this.theme = theme;
    return this;
  }

  getTheme(): ArrayChartThemeType {
    return this.theme;
  }

  getConfigByKey(key: keyof ArrayChartConfigType) {
    if (key in this.config) {
      return this.config[key];
    }

    throw new Error(`Key does not exist:${key}`);
  }

  getThemeByKey(key: keyof ArrayChartThemeType) {
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
  ArrayChart,
  ArrayChartItemType,
  ArrayChartDataType,
  ArrayChartConfigType,
  ArrayChartThemeType,
};
