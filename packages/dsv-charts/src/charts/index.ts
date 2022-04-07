import {
  ArrayChartDataType,
  StackChartDataType,
  QueueChartDataType,
  LinkedListDataType,
} from '@dsv-charts/charts';
import { ArrayChart, ArrayChartConfigType, ArrayChartThemeType } from './array';
import { StackChart, StackChartConfigType, StackChartThemeType } from './stack';
import { QueueChart, QueueChartConfigType, QueueChartThemeType } from './queue';
import {
  LinkedListChart,
  LinkedListConfigType,
  LinkedListThemeType,
} from './linked-list';

export type ChartType = ArrayChart | StackChart | QueueChart | LinkedListChart;

export type ConfigType =
  | ArrayChartConfigType
  | StackChartConfigType
  | QueueChartConfigType
  | LinkedListConfigType;

export type ThemeType =
  | ArrayChartThemeType
  | StackChartThemeType
  | QueueChartThemeType
  | LinkedListThemeType;

export type DataType =
  | ArrayChartDataType
  | StackChartDataType
  | QueueChartDataType
  | LinkedListDataType;

export * from './array';
export * from './queue';
export * from './stack';
export * from './linked-list';
