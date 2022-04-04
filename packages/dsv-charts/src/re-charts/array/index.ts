import {
  max,
  Selection,
  scaleBand,
  scaleLinear,
  ScaleBand,
  ScaleLinear,
} from 'd3';
import { merge } from 'lodash';

import {
  isHTMLElement,
  isObject,
  isString,
} from '@dsv-charts/utils/type-check';
import {
  Cartesian2Layout,
  Cartesian2LayoutConfigType,
  Cartesian2InnerRect,
} from '@dsv-charts/layouts/index';

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
  }

  render(data?: ArrayChartDataType): this {
    if (data) {
      this.setData(data);
    }
    this.renderScale();
    this.renderRectGroup();
    this.renderTextGroup();

    return this;
  }

  renderAsync(data?: ArrayChartDataType): this {
    if (data) {
    } else {
    }
    return this;
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
    const { duration } = this.getConfigByKey('transition') as {
      duration: number;
    };

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
    const { duration } = this.getConfigByKey('transition') as {
      duration?: number;
    };
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
    this.config.data = data;
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

  destory(): void {
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
  }
}

export {
  ArrayChart,
  ArrayChartItemType,
  ArrayChartDataType,
  ArrayChartConfigType,
  ArrayChartThemeType,
};
