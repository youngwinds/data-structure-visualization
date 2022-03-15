import { DataType, IConfig, IConfigKeys, ITheme } from '@dsv-charts/typings';
import { merge } from 'lodash';
import { defaultConfig } from './default-config';
import { light as defaultTheme } from '@dsv-charts/theme';
import { IThemeKeys } from '@dsv-charts/typings';

export abstract class BaseChart {
  private _dom: HTMLElement;
  private _config: IConfig;
  private _theme: ITheme;

  constructor(
    selector: string | HTMLElement,
    customConfig: IConfig,
    customTheme: ITheme
  ) {
    this._dom =
      typeof selector === 'string'
        ? document.getElementById(selector)
        : selector;
    this._config = merge({}, defaultConfig, customConfig) as IConfig;
    this._theme = merge({}, defaultTheme, customTheme) as ITheme;
  }

  public render() {}

  /**
   * setters
   */
  public setData(data: DataType) {
    this._config.data = data;
  }

  public setConfig(customConfig: IConfig) {
    this._config = merge({}, defaultConfig, customConfig) as IConfig;
  }

  public setTheme(customTheme: ITheme) {
    this._theme = merge({}, defaultTheme, customTheme) as ITheme;
  }

  /**
   * getters
   */
  public getDom() {
    return this._dom;
  }

  public getConfig() {
    return this._config;
  }

  public getTheme() {
    return this._theme;
  }

  public getData() {
    return this._config.data;
  }

  public getConfigByKey(key: IConfigKeys): any {
    if (this._config[key]) {
      return this._config[key];
    }

    throw new Error(`error key: ${key}`);
  }

  public getThemeByKey(key: IThemeKeys): any {
    if (this._theme[key]) {
      return this._theme[key];
    }

    throw new Error(`error key: ${key}`);
  }
}
