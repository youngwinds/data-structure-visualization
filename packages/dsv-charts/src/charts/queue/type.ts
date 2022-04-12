import { StateType } from './../../types/state/index';
import {
  IChartLifeCircle,
  TransitionType,
  Cartesian2LayoutConfigType,
} from '@dsv-charts/types';

type QueueChartItemType = { key: string; name: string; value: string | number };

type QueueChartDataType = QueueChartItemType[];

type QueueChartConfigType = {
  type: 'queue';
  data: QueueChartDataType;
  state?: StateType;
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

export {
  QueueChartItemType,
  QueueChartDataType,
  QueueChartConfigType,
  QueueChartThemeType,
};
