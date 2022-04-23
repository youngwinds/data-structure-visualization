import { DsArray, DsArrayConfigType, DsArrayThemeType } from './array';
import { DsStack, DsStackConfigType, DsStackThemeType } from './stack';
import { DsQueue, DsQueueConfigType, DsQueueThemeType } from './queue';
import {
  DsLinkedList,
  DsLinkedListConfigType,
  DsLinkedListThemeType,
} from './linked-list';
import { DsTree, DsTreeConfigType, DsTreeThemeType } from './tree';
import {
  DsBinaryTree,
  DsBinaryTreeConfigType,
  DsBinaryTreeThemeType,
} from './binary-tree';
import { DsGraph, DsGraphConfigType, DsGraphThemeType } from './graph';
import { DsMatrix, DsMatrixConfigType, DsMatrixThemeType } from './matrix';

export type DsChartType =
  | DsArray
  | DsMatrix
  | DsStack
  | DsQueue
  | DsLinkedList
  | DsTree
  | DsBinaryTree
  | DsGraph;

export type DsConfigType =
  | DsArrayConfigType
  | DsMatrixConfigType
  | DsStackConfigType
  | DsQueueConfigType
  | DsLinkedListConfigType
  | DsTreeConfigType
  | DsBinaryTreeConfigType
  | DsGraphConfigType;

export type DsThemeType =
  | DsArrayThemeType
  | DsMatrixThemeType
  | DsStackThemeType
  | DsQueueThemeType
  | DsLinkedListThemeType
  | DsTreeThemeType
  | DsBinaryTreeThemeType
  | DsGraphThemeType;

export * from './array';
export * from './queue';
export * from './stack';
export * from './linked-list';
export * from './tree';
export * from './binary-tree';
export * from './graph';
export * from './matrix';
