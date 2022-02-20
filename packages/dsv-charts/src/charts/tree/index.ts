import { IConfig } from '@dsv-charts/typings/IConfig';
import { IChart } from '@dsv-charts/typings/IChart';
import { Base } from '../base';

export class TreeChart extends Base implements IChart {
  constructor(dom: string | HTMLElement, config: IConfig) {
    super(dom, config);
    this.init();
  }

  init() {
    console.log('init TreeChart');
  }

  render() {
    console.log('render TreeChart');
  }

  destroy() {
    console.log('destroy TreeChart');
  }
}
