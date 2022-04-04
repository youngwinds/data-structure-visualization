import {
  DSArrayConfigType,
  DsArrayThemeType,
} from '@dsv-charts/data-structure';
import { ArrayChart } from '@dsv-charts/charts';

export type Chart = ArrayChart;
export type ConfigType = DSArrayConfigType;
export type ThemeType = DsArrayThemeType;

export * from './IChart';
export * from './IChartLifeCircle';
export * from './util';

export * from './transition';
