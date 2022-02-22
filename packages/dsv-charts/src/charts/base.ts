import { DataType, IConfig, IConfigKeys } from '@dsv-charts/typings/config';
import { merge } from 'lodash';
import { defaultConfig } from './default-config';

export abstract class BaseChart {
  private _dom: HTMLElement;
  private _config: IConfig;

  constructor(selector: string | HTMLElement, customConfig: IConfig) {
    this._dom =
      typeof selector === 'string'
        ? document.getElementById(selector)
        : selector;
    this._config = merge({}, defaultConfig, customConfig) as IConfig;
  }

  protected render() {}

  /**
   * update
   */
  protected updateData(data: DataType) {
    this._config.data = data;
  }

  protected updateConfig(customConfig: IConfig) {
    this._config = merge({}, defaultConfig, customConfig) as IConfig;
  }

  /**
   * getters
   */
  protected getDom() {
    return this._dom;
  }

  protected getConfig() {
    return this._config;
  }

  protected getData() {
    return this._config.data;
  }

  protected getConfigByKey(key: IConfigKeys) {
    if (this._config[key]) {
      return this._config[key];
    }

    throw new Error(`error key: ${key}`);
  }
}
