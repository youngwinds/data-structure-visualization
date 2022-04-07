import { ConfigType, ThemeType, DataType } from '@dsv-charts/charts';
import {
  isFunction,
  isString,
  isHTMLElement,
  isObject,
} from '@dsv-charts/utils';
import { cloneDeep } from 'lodash';

export abstract class BaseChart<
  ConfigT extends ConfigType,
  ThemeT extends ThemeType,
  DataT extends DataType
> {
  private selector: string | HTMLElement;
  private config: ConfigT;
  private theme: ThemeT;
  private dom: HTMLElement;

  constructor(selector: string | HTMLElement, config: ConfigT, theme: ThemeT) {
    this.selector = selector;
    this.config = config;
    this.theme = theme;

    this.dom = this.initDom(selector);
  }

  public initDom(selector: string | HTMLElement): HTMLElement {
    if (isString(selector) && isObject(window)) {
      return window.document.querySelector(`#${selector}`);
    } else if (isHTMLElement(selector)) {
      return selector;
    }
  }

  public getConfigByKey<T extends keyof ConfigType>(key: T) {
    return this.config[key];
  }

  public getThemeByKey<T extends keyof ThemeType>(key: T) {
    return this.theme[key];
  }

  public getDom(): HTMLElement {
    return this.dom;
  }

  public getSelector(): string | HTMLElement {
    return this.selector;
  }

  public setData(data: DataT): this {
    this.chartWillDataChanged();
    this.config.data = data;
    this.chartDidDataChanged();
    return this;
  }

  public updateData(data: DataT): this {
    this.config.data = data;
    return this;
  }

  public getData() {
    return this.config.data;
  }

  public setConfig(config: ConfigT): this {
    this.config = config;
    return this;
  }

  public getConfig(): ConfigType {
    return this.config;
  }

  public setTheme(theme: ThemeT): this {
    this.theme = theme;
    return this;
  }

  public getTheme(): ThemeT {
    return this.theme;
  }

  public destroy() {
    this.config = null;
    this.theme = null;
    this.selector = null;
    this.dom = null;
  }

  // life circles
  public chartDidChartInit(): void {
    const { chartDidChartInit } = this.getConfigByKey('lifeCircle');

    isFunction(chartDidChartInit) &&
      chartDidChartInit(cloneDeep(this.getConfig()), this as any);
  }

  public chartDidDataChanged(): void {
    const { chartDidDataChanged } = this.getConfigByKey('lifeCircle');
    isFunction(chartDidDataChanged) &&
      chartDidDataChanged(cloneDeep(this.getConfig()), this as any);
  }

  public chartWillDataChanged(): void {
    const { chartWillDataChanged } = this.getConfigByKey('lifeCircle');
    isFunction(chartWillDataChanged) &&
      chartWillDataChanged(cloneDeep(this.getConfig()), this as any);
  }

  public chartWillDestroyed(): void {
    const { chartWillDestroyed } = this.getConfigByKey('lifeCircle');
    isFunction(chartWillDestroyed) &&
      chartWillDestroyed(cloneDeep(this.getConfig()), this as any);
  }

  public chartDidDestroyed(): void {
    const { chartDidDestroyed } = this.getConfigByKey('lifeCircle');
    isFunction(chartDidDestroyed) &&
      chartDidDestroyed(cloneDeep(this.getConfig()), this as any);
  }
}
