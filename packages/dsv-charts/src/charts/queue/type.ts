import { Selection, ScaleBand, ScaleLinear } from 'd3';
import {
  IChart,
  IChartLifeCircle,
  TransitionType,
  Cartesian2LayoutConfigType,
} from '@dsv-charts/types';

import { Cartesian2Layout } from '@dsv-charts/components';

type QueueChartItemType = { key: string; name: string; value: string | number };

type QueueChartDataType = QueueChartItemType[];

type QueueChartConfigType = {
  type: 'queue';
  data: QueueChartDataType;
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type QueueChartThemeType = {
  type: 'queue';
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

interface IQueueChart
  extends IChart<
    QueueChartDataType,
    QueueChartConfigType,
    QueueChartThemeType
  > {
  layout: Cartesian2Layout;
  rectGroup: Selection<SVGGElement, unknown, null, undefined>;
  textGroup: Selection<SVGGElement, unknown, null, undefined>;
  containerGroup: Selection<SVGGElement, unknown, null, undefined>;

  xScale: ScaleBand<string>;

  initDom(selector: string | HTMLElement): HTMLElement;
  initLayout(): Cartesian2Layout;
  initGroup(): void;

  render(data?: QueueChartDataType): this;
  renderAsync(data?: QueueChartDataType): Promise<true>;
  renderScale(): this;
  renderRectGroup(): this;
  renderTextGroup(): this;
  renderContainerGroup(): this;
}

export {
  QueueChartItemType,
  QueueChartDataType,
  QueueChartConfigType,
  QueueChartThemeType,
  IQueueChart,
};
