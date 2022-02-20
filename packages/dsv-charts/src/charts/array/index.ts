import { IConfig } from '@dsv-charts/typings/IConfig';
import { IChart } from '@dsv-charts/typings/IChart';
import { Base } from '../base';

export class ArrayChart extends Base implements IChart {
  constructor(dom: string | HTMLElement, config: IConfig) {
    super(dom, config);
    this.init();
  }

  init() {
    console.log('init ArrayChart');
  }

  render() {
    console.log('render ArrayChart');
  }

  destroy() {
    console.log('destroy ArrayChart');
  }
}
