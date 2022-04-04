import {
  ArrayChart,
  ArrayChartConfigType,
  ArrayChartThemeType,
} from '@dsv-charts/charts';

export type ArrayLike<T> = {
  [key: number]: T;
  length: number;
};

export type Chart = ArrayChart;
export type ConfigType = ArrayChartConfigType;
export type ThemeType = ArrayChartThemeType;

export * from './IChart';
export * from './IChartLifeCircle';
