import { IConfig } from '@dsv-charts/typings/config';
import { BaseChart } from '../base';

export class StackTree extends BaseChart {
  constructor(dom: string | HTMLElement, config: IConfig) {
    super(dom, config);
  }

  render() {
    console.log('render StackTree');
  }

  destroy() {
    console.log('destroy StackTree');
  }
}
