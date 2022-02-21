import { IConfig, ILayoutConfig } from '@dsv-charts/typings/IConfig';
import { IChart } from '@dsv-charts/typings/IChart';
import { BaseChart } from '../base';
import { Cartesian2Layout } from '@dsv-charts/layouts/cartesian2';
import { Selection } from 'd3-selection';

export class ArrayChart extends BaseChart implements IChart {
  private _layout: Cartesian2Layout;

  constructor(selector: string | HTMLElement, customConfig: IConfig) {
    super(selector, customConfig);

    this._layout = new Cartesian2Layout(
      super.getDom(),
      super.getConfigByKey('layout') as ILayoutConfig
    );
  }

  render() {
    console.log('render ArrayChart');
  }

  destroy() {
    console.log('destroy ArrayChart');
    this._layout.destroy();
  }
}
