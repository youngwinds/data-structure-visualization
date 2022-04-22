import {
  ArrayChart,
  ArrayChartConfigType,
  ArrayChartThemeType,
  ArrayChartDataType,
} from './array';

import {
  StackChart,
  StackChartConfigType,
  StackChartThemeType,
  StackChartDataType,
} from './stack';

import {
  QueueChart,
  QueueChartConfigType,
  QueueChartThemeType,
  QueueChartDataType,
} from './queue';

import {
  LinkedListChart,
  LinkedListConfigType,
  LinkedListThemeType,
  LinkedListDataType,
} from './linked-list';

import { TreeChart, TreeConfigType, TreeThemeType, TreeDataType } from './tree';
import {
  BinaryTreeChart,
  BinaryTreeConfigType,
  BinaryTreeThemeType,
  BinaryTreeDataType,
} from './binary-tree';

import {
  GraphChart,
  GraphConfigType,
  GraphThemeType,
  GraphDataType,
} from './graph';

export type ChartType =
  | ArrayChart
  | StackChart
  | QueueChart
  | LinkedListChart
  | TreeChart
  | BinaryTreeChart
  | GraphChart;

export type ConfigType =
  | ArrayChartConfigType
  | StackChartConfigType
  | QueueChartConfigType
  | LinkedListConfigType
  | TreeConfigType
  | BinaryTreeConfigType
  | GraphConfigType;

export type ThemeType =
  | ArrayChartThemeType
  | StackChartThemeType
  | QueueChartThemeType
  | LinkedListThemeType
  | TreeThemeType
  | BinaryTreeThemeType
  | GraphThemeType;

export type DataType =
  | ArrayChartDataType
  | StackChartDataType
  | QueueChartDataType
  | LinkedListDataType
  | TreeDataType
  | BinaryTreeDataType
  | GraphDataType;

export * from './array';
export * from './queue';
export * from './stack';
export * from './linked-list';
export * from './tree';
export * from './binary-tree';
export * from './graph';
