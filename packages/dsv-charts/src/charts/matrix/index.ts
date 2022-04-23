import { Selection, scaleBand, ScaleBand } from 'd3';
import { merge } from 'lodash';

import { Cartesian2Layout } from '@dsv-charts/components';

import {
  MatrixItemType,
  MatrixDataType,
  MatrixConfigType,
  MatrixThemeType,
} from './type';

import { defaultConfig, defaultTheme } from './default';
import { BaseChart } from '../base';

class MatrixChart extends BaseChart<
  MatrixConfigType,
  MatrixThemeType,
  MatrixDataType
> {
  layout: Cartesian2Layout;
  rectGroup: Selection<SVGGElement, unknown, null, undefined>;
  textGroup: Selection<SVGGElement, unknown, null, undefined>;

  constructor(
    selector: string | HTMLElement,
    config: MatrixConfigType,
    theme: MatrixThemeType
  ) {
    super(
      selector,
      merge({}, defaultConfig, config),
      merge({}, defaultTheme, theme)
    );

    this.layout = this.initLayout();
    this.initGroup();
    this.chartDidChartInit();
  }

  initLayout(): Cartesian2Layout {
    return new Cartesian2Layout(super.getDom(), super.getConfigByKey('layout'));
  }

  initGroup(): void {
    this.rectGroup = this.layout.addGroup();
    this.textGroup = this.layout.addGroup();
  }

  async renderAsync(data?: MatrixDataType): Promise<true> {
    data && super.updateData(data);

    return await new Promise((resolve) => {
      this.render().transitionEnd(resolve);
    });
  }

  private transitionEnd(resolve) {
    const { duration } = this.getConfigByKey('transition');

    return this.rectGroup.call((g) => {
      g.transition()
        .duration(duration)
        .on('end', () => {
          resolve(true);
        });
    });
  }

  render(data?: MatrixDataType): this {
    data && super.updateData(data);

    return this;
  }

  destroy(): void {
    this.chartWillDestroyed();
    this.layout.destroy();
    this.textGroup.remove();
    this.rectGroup.remove();

    this.textGroup = null;
    this.rectGroup = null;

    this.layout = null;

    super.destroy();
    this.chartDidDestroyed();
  }
}

export {
  MatrixChart,
  MatrixItemType,
  MatrixDataType,
  MatrixConfigType,
  MatrixThemeType,
};
