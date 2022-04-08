import { DsArray, DsArrayConfigType, DsArrayThemeType } from './array';
import { DsStack, DsStackConfigType, DsStackThemeType } from './stack';
import { DsQueue, DsQueueConfigType, DsQueueThemeType } from './queue';
import {
  DsLinkedList,
  DsLinkedListConfigType,
  DsLinkedListThemeType,
} from './linked-list';
import { DsTreeConfigType, DsTreeThemeType } from './tree';

export type DsChartType = DsArray | DsStack | DsQueue | DsLinkedList;

export type DsConfigType =
  | DsArrayConfigType
  | DsStackConfigType
  | DsQueueConfigType
  | DsLinkedListConfigType
  | DsTreeConfigType;

export type DsThemeType =
  | DsArrayThemeType
  | DsStackThemeType
  | DsQueueThemeType
  | DsLinkedListThemeType
  | DsTreeThemeType;

export * from './array';
export * from './queue';
export * from './stack';
export * from './linked-list';
export * from './tree';
