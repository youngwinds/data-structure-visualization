import { IConfig } from '@dsv-charts/typings/IConfig';
import { IChart } from '@dsv-charts/typings/IChart';
import { BaseChart } from '../base';

export class StackTree extends BaseChart implements IChart {
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
