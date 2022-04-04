import { DSArrayConfigType } from '@dsv-charts/data-structure';
import { ArrayChart, ArrayChartThemeType } from '@dsv-charts/charts';

import {} from '@dsv-charts/data-structure';

export type ArrayLike<T> = {
  [key: number]: T;
  length: number;
};

export type Chart = ArrayChart;
export type ConfigType = DSArrayConfigType;
export type ThemeType = ArrayChartThemeType;

export * from './IChart';
export * from './IChartLifeCircle';
