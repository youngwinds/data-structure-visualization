import { IConfig, IConfigKeys } from '@dsv-charts/typings/IConfig';
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

  /**
   * getters
   */
  getDom() {
    return this._dom;
  }

  getConfig() {
    return this._config;
  }

  getConfigByKey(key: IConfigKeys) {
    if (this._config[key]) {
      return this._config[key];
    }

    throw new Error(`error key: ${key}`);
  }
}
