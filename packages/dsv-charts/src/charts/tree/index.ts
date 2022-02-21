import { IConfig } from '@dsv-charts/typings/IConfig';
import { IChart } from '@dsv-charts/typings/IChart';
import { BaseChart } from '../base';

export class TreeChart extends BaseChart implements IChart {
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
