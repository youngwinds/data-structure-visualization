import { IConfig } from '@dsv-charts/typings/config';
import { BaseChart } from '../base';

export class TreeChart extends BaseChart {
  constructor(dom: string | HTMLElement, config: IConfig) {
    super(dom, config);
  }

  render() {
    console.log('render TreeChart');
  }

  destroy() {
    console.log('destroy TreeChart');
  }
}
