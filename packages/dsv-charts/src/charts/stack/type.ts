import { Selection, ScaleBand, ScaleLinear } from 'd3';
import {
  IChart,
  IChartLifeCircle,
  TransitionType,
  Cartesian2LayoutConfigType,
} from '@dsv-charts/types';

import { Cartesian2Layout } from '@dsv-charts/components';

type StackChartItemType = { key: string; name: string; value: string | number };

type StackChartDataType = StackChartItemType[];

type StackChartConfigType = {
  type: 'stack';
  data: StackChartDataType;
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type StackChartThemeType = {
  type: 'stack';
  colorScheme?: string[];
  text?: {
    color?: string;
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

interface IStackChart
  extends IChart<
    StackChartDataType,
    StackChartConfigType,
    StackChartThemeType
  > {
  layout: Cartesian2Layout;
  rectGroup: Selection<SVGGElement, unknown, null, undefined>;
  textGroup: Selection<SVGGElement, unknown, null, undefined>;
  containerGroup: Selection<SVGGElement, unknown, null, undefined>;

  yScale: ScaleBand<string>;

  initDom(selector: string | HTMLElement): HTMLElement;
  initLayout(): Cartesian2Layout;
  initGroup(): void;

  render(data?: StackChartDataType): this;
  renderAsync(data?: StackChartDataType): Promise<true>;
  renderScale(): this;
  renderRectGroup(): this;
  renderTextGroup(): this;
  renderContainerGroup(): this;
}

export {
  StackChartItemType,
  StackChartDataType,
  StackChartConfigType,
  StackChartThemeType,
  IStackChart,
};
