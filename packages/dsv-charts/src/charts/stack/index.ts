import { Selection, scaleBand, ScaleBand, easeCubic } from 'd3';
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
} from '@dsv-charts/types';

import {
  StackChartItemType,
  StackChartDataType,
  StackChartConfigType,
  StackChartThemeType,
  IStackChart,
} from './type';

import { defaultConfig, defaultTheme } from './default';

class StackChart implements IStackChart {
  dom: HTMLElement;
  selector: string | HTMLElement;
  config: StackChartConfigType;
  theme: StackChartThemeType;

  layout: Cartesian2Layout;
  rectGroup: Selection<SVGGElement, unknown, null, undefined>;
  textGroup: Selection<SVGGElement, unknown, null, undefined>;
  containerGroup: Selection<SVGGElement, unknown, null, undefined>;

  yScale: ScaleBand<string>;

  constructor(
    selector: string | HTMLElement,
    config: StackChartConfigType,
    theme: StackChartThemeType
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
      chartDidChartInit(cloneDeep(this.getConfig()), this as StackChart);
  }

  chartDidDataChanged(): void {
    const { chartDidDataChanged } = this.getConfigByKey(
      'lifeCircle'
    ) as IChartLifeCircle;
    isFunction(chartDidDataChanged) &&
      chartDidDataChanged(cloneDeep(this.getConfig()), this as StackChart);
  }

  chartWillDataChanged(): void {
    const { chartWillDataChanged } = this.getConfigByKey(
      'lifeCircle'
    ) as IChartLifeCircle;
    isFunction(chartWillDataChanged) &&
      chartWillDataChanged(cloneDeep(this.getConfig()), this as StackChart);
  }

  chartWillDestroyed(): void {
    const { chartWillDestroyed } = this.getConfigByKey(
      'lifeCircle'
    ) as IChartLifeCircle;
    isFunction(chartWillDestroyed) &&
      chartWillDestroyed(cloneDeep(this.getConfig()), this as StackChart);
  }

  chartDidDestroyed(): void {
    const { chartDidDestroyed } = this.getConfigByKey(
      'lifeCircle'
    ) as IChartLifeCircle;
    isFunction(chartDidDestroyed) &&
      chartDidDestroyed(cloneDeep(this.getConfig()), this as StackChart);
  }

  async renderAsync(data?: StackChartDataType): Promise<true> {
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

  render(data?: StackChartDataType): this {
    if (data) {
      this.config.data = data;
    }
    this.renderScale();
    this.renderRectGroup();
    this.renderTextGroup();
    this.renderContainerGroup();

    return this;
  }

  renderScale() {
    const innerRect = this.layout.getInnerRect();
    const data = this.getData();

    this.yScale = scaleBand(data.map((d) => d.key).reverse(), [
      innerRect.innerTop,
      innerRect.innerBottom,
    ]).paddingInner(0.1);

    return this;
  }

  renderRectGroup() {
    const innerRect = this.layout.getInnerRect();
    const data = this.getData();
    const colorScheme = this.getThemeByKey('colorScheme');
    const { duration } = this.getConfigByKey('transition') as TransitionType;

    this.rectGroup.call((g) => {
      g.selectAll('rect')
        .data(data, (d: StackChartItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('rect')
              .attr('x', innerRect.innerLeft)
              .attr('height', this.yScale.bandwidth())
              .attr('y', -this.yScale.bandwidth())
              .attr('width', innerRect.innerWidth)
              .transition()
              .ease(easeCubic)
              .duration(duration)
              .attr('y', (d: StackChartItemType) => this.yScale(d.key))
              .attr('fill', colorScheme[0])
              .attr('height', this.yScale.bandwidth())
              .attr('width', innerRect.innerWidth)
              .selection(),
          (update) =>
            update
              .transition()
              .duration(duration)
              .attr('x', innerRect.innerLeft)
              .attr('y', (d) => this.yScale(d.key))
              .attr('fill', colorScheme[0])
              .attr('height', this.yScale.bandwidth())
              .attr('width', innerRect.innerWidth)
              .selection(),
          (exit) =>
            exit
              .transition()
              .ease(easeCubic)
              .duration(duration)
              .attr('y', -innerRect.innerTop)
              .attr('height', innerRect.innerTop)
              .remove()
        );
    });

    return this;
  }

  renderTextGroup() {
    const innerRect = this.layout.getInnerRect();
    const data = this.getData();
    const text = this.getThemeByKey('text') as {
      color?: string;
    };
    const { duration } = this.getConfigByKey('transition') as TransitionType;

    this.textGroup.call((g) => {
      g.selectAll('text')
        .data(data, (d: StackChartItemType) => d.key)
        .join(
          (enter) =>
            enter
              .append('text')
              .attr('y', 0)
              .attr('x', () => innerRect.innerLeft)
              .attr('dx', () => innerRect.innerWidth / 2)
              .transition()
              .ease(easeCubic)
              .duration(duration)
              .attr('dx', () => innerRect.innerWidth / 2)
              .attr('y', (d) => this.yScale(d.key))
              .attr('dy', () => this.yScale.bandwidth() / 2)
              .attr('fill', text.color)
              .selection()
              .html((d) => d.name),
          (update) =>
            update
              .transition()
              .duration(duration)
              .attr('x', () => innerRect.innerLeft)
              .attr('dx', () => innerRect.innerWidth / 2)
              .attr('y', (d) => this.yScale(d.key))
              .attr('dy', () => this.yScale.bandwidth() / 2)
              .attr('fill', text.color)
              .selection()
              .html((d) => d.name),
          (exit) =>
            exit
              .transition()
              .ease(easeCubic)
              .duration(duration)
              .attr('y', -innerRect.innerTop / 2)
              .attr('dy', innerRect.innerTop / 2)
              .remove()
        );
    });

    return this;
  }

  renderContainerGroup() {
    const innerRect = this.layout.getInnerRect();
    const border = this.getThemeByKey('border') as {
      color?: string;
      width?: number;
    };

    const { duration } = this.getConfigByKey('transition') as TransitionType;

    const points = [
      [innerRect.innerLeft, innerRect.innerTop].join(' '),
      [innerRect.innerLeft, innerRect.innerBottom].join(' '),
      [innerRect.innerRight, innerRect.innerBottom].join(' '),
      [innerRect.innerRight, innerRect.innerTop].join(' '),
    ].join(',');

    this.containerGroup
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
    this.containerGroup = this.layout.addGroup();
  }

  getSelector(): string | HTMLElement {
    return this.selector;
  }

  getDom(): HTMLElement {
    return this.dom;
  }

  setData(data: StackChartDataType): this {
    this.chartWillDataChanged();
    this.config.data = data;
    this.chartDidDataChanged();
    return this;
  }

  getData(): StackChartDataType {
    return this.config.data;
  }

  setConfig(config: StackChartConfigType): this {
    this.config = config;
    return this;
  }

  getConfig(): StackChartConfigType {
    return this.config;
  }

  setTheme(theme: StackChartThemeType): this {
    this.theme = theme;
    return this;
  }

  getTheme(): StackChartThemeType {
    return this.theme;
  }

  getConfigByKey(key: keyof StackChartConfigType) {
    if (key in this.config) {
      return this.config[key];
    }

    throw new Error(`Key does not exist:${key}`);
  }

  getThemeByKey(key: keyof StackChartThemeType) {
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
  StackChart,
  StackChartItemType,
  StackChartDataType,
  StackChartConfigType,
  StackChartThemeType,
};
