import { IChart } from '@dsv-charts/re-charts/IChart';

import {
  Cartesian2Layout,
  Cartesian2LayoutConfigType,
} from '@dsv-charts/layouts/index';
import { Selection, ScaleBand, ScaleLinear } from 'd3';

type ArrayChartItemType = { key: string; name: string; value: string | number };

type ArrayChartDataType = ArrayChartItemType[];

type ArrayChartConfigType = {
  type: 'array';
  data: ArrayChartDataType;
  layout?: Cartesian2LayoutConfigType;
  transition?: {
    duration?: number;
  };
};

type ArrayChartThemeType = {
  type: 'array';
  colorScheme?: string[];
  text?: {
    textColor?: string;
  };
  border?: {
    color?: string;
    width?: number | string;
  };
  arrow?: {
    color?: string;
    width?: number | string;
  };
};

interface IArrayChart
  extends IChart<
    ArrayChartDataType,
    ArrayChartConfigType,
    ArrayChartThemeType
  > {
  layout: Cartesian2Layout;
  rectGroup: Selection<SVGGElement, unknown, null, undefined>;
  textGroup: Selection<SVGGElement, unknown, null, undefined>;

  xScale: ScaleBand<string>;
  yScale: ScaleLinear<number, number, never>;

  initDom(selector: string | HTMLElement): HTMLElement;
  initLayout(): Cartesian2Layout;
  initGroup(): void;

  render(data?: ArrayChartDataType): this;
  renderAsync(data?: ArrayChartDataType): this;
  renderScale(): this;
  renderRectGroup(): this;
  renderTextGroup(): this;
}

export {
  ArrayChartItemType,
  ArrayChartDataType,
  ArrayChartConfigType,
  ArrayChartThemeType,
  IArrayChart,
};
