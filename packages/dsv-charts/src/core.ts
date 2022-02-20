import { getChart } from './charts';
import { IConfig } from './typings/IConfig';

export class DsvChart {
  constructor(dom: string | HTMLElement, config: IConfig) {
    this.init(dom, config);
  }

  init(dom: string | HTMLElement, config: IConfig) {
    const { type } = config;
    const Type = getChart(type);
    console.log(Type);
  }
}
