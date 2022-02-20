import { IConfig } from '@dsv-charts/typings/IConfig';
import { IChart } from '@dsv-charts/typings/IChart';
import { Base } from '../base';

export class StackTree extends Base implements IChart {
  constructor(dom: string | HTMLElement, config: IConfig) {
    super(dom, config);
    this.init();
  }

  init() {
    console.log('init StackTree');
  }

  render() {
    console.log('render StackTree');
  }

  destroy() {
    console.log('destroy StackTree');
  }
}
