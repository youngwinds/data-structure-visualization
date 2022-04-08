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
import { TreeChart, TreeConfigType, TreeThemeType, TreeDataType } from './tree';

export type ChartType =
  | ArrayChart
  | StackChart
  | QueueChart
  | LinkedListChart
  | TreeChart;

export type ConfigType =
  | ArrayChartConfigType
  | StackChartConfigType
  | QueueChartConfigType
  | LinkedListConfigType
  | TreeConfigType;

export type ThemeType =
  | ArrayChartThemeType
  | StackChartThemeType
  | QueueChartThemeType
  | LinkedListThemeType
  | TreeThemeType;

export type DataType =
  | ArrayChartDataType
  | StackChartDataType
  | QueueChartDataType
  | LinkedListDataType
  | TreeDataType;

export * from './array';
export * from './queue';
export * from './stack';
export * from './linked-list';
export * from './tree';
