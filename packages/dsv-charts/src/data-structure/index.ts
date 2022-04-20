import { DsArray, DsArrayConfigType, DsArrayThemeType } from './array';
import { DsStack, DsStackConfigType, DsStackThemeType } from './stack';
import { DsQueue, DsQueueConfigType, DsQueueThemeType } from './queue';
import {
  DsLinkedList,
  DsLinkedListConfigType,
  DsLinkedListThemeType,
} from './linked-list';
import { DsTreeConfigType, DsTreeThemeType } from './tree';
import { DsGraph, DsGraphConfigType, DsGraphThemeType } from './graph';

export type DsChartType = DsArray | DsStack | DsQueue | DsLinkedList | DsGraph;

export type DsConfigType =
  | DsArrayConfigType
  | DsStackConfigType
  | DsQueueConfigType
  | DsLinkedListConfigType
  | DsTreeConfigType
  | DsGraphConfigType;

export type DsThemeType =
  | DsArrayThemeType
  | DsStackThemeType
  | DsQueueThemeType
  | DsLinkedListThemeType
  | DsTreeThemeType
  | DsGraphThemeType;

export * from './array';
export * from './queue';
export * from './stack';
export * from './linked-list';
export * from './tree';
export * from './graph';
