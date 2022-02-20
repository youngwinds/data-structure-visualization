import { IConfig } from '@dsv-charts/typings/IConfig';

export abstract class Base {
  private _dom: string | HTMLElement;
  private _config: IConfig;

  constructor(dom: string | HTMLElement, config: IConfig) {
    this._dom = dom;
    this._config = config;
  }

  getDom() {
    return this._dom;
  }

  getConfig() {
    return this._config;
  }
}
