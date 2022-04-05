import {
  DsArrayConfigType,
  DsArrayThemeType,
  DsQueueConfigType,
  DsQueueThemeType,
  DsStackConfigType,
  DsStackThemeType,
} from '@dsv-charts/data-structure';
import { ArrayChart, QueueChart, StackChart } from '@dsv-charts/charts';

export type Chart = ArrayChart | QueueChart | StackChart;

export type ConfigType =
  | DsArrayConfigType
  | DsQueueConfigType
  | DsStackConfigType;

export type ThemeType = DsArrayThemeType | DsQueueThemeType | DsStackThemeType;

export * from './IChart';
export * from './IChartLifeCircle';
export * from './util';

export * from './transition';
export * from './layout';
