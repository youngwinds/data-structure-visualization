import { DsConfigType, DsThemeType } from '@dsv-charts/data-structure';

import {
  ArrayChart,
  ArrayChartConfigType,
  MatrixChart,
  MatrixConfigType,
  QueueChart,
  QueueChartConfigType,
  StackChart,
  StackChartConfigType,
  LinkedListChart,
  LinkedListConfigType,
  TreeChart,
  TreeConfigType,
  BinaryTreeChart,
  BinaryTreeConfigType,
  GraphChart,
  GraphConfigType,
} from '@dsv-charts/charts';

import {
  DsArray,
  DsArrayConfigType,
  DsArrayThemeType,
  DsMatrix,
  DsMatrixConfigType,
  DsMatrixThemeType,
  DsLinkedList,
  DsLinkedListConfigType,
  DsLinkedListThemeType,
  DsQueue,
  DsQueueConfigType,
  DsQueueThemeType,
  DsStack,
  DsStackConfigType,
  DsStackThemeType,
  DsTree,
  DsTreeConfigType,
  DsTreeThemeType,
  DsBinaryTree,
  DsBinaryTreeConfigType,
  DsBinaryTreeThemeType,
  DsGraph,
  DsGraphConfigType,
  DsGraphThemeType,
} from '@dsv-charts/data-structure';

export class Dsv {
  private map = new Map<
    | 'array'
    | 'matrix'
    | 'stack'
    | 'queue'
    | 'linkedList'
    | 'tree'
    | 'binaryTree'
    | 'graph',
    Function
  >();
  private static instance: Dsv;

  static getInstance(addStateCallback) {
    return this.instance || (this.instance = new Dsv(addStateCallback));
  }

  constructor(addStateCallback) {
    this.init(addStateCallback);
  }

  init(addStateCallback) {
    this.initArray(addStateCallback);
    this.initMatrix(addStateCallback);
    this.initStack(addStateCallback);
    this.initQueue(addStateCallback);
    this.initLinkedList(addStateCallback);
    this.initTree(addStateCallback);
    this.initBinaryTree(addStateCallback);
    this.initGraph(addStateCallback);
  }

  initArray(addStateCallback) {
    return this.map.set(
      'array',
      (config: DsArrayConfigType, theme: DsArrayThemeType) => {
        const array = new DsArray(
          {
            ...config,
            lifeCircle: {
              chartDidChartInit: (
                config: ArrayChartConfigType,
                instance: ArrayChart
              ) => {
                addStateCallback(config, instance);
              },
              chartDidDataChanged: (
                config: ArrayChartConfigType,
                instance: ArrayChart
              ) => {
                addStateCallback(config, instance);
              },
            },
          },
          { ...theme }
        );
        return array;
      }
    );
  }

  initMatrix(addStateCallback) {
    return this.map.set(
      'matrix',
      (config: DsMatrixConfigType, theme: DsMatrixThemeType) => {
        const matrix = new DsMatrix(
          {
            ...config,
            lifeCircle: {
              chartDidChartInit: (
                config: MatrixConfigType,
                instance: MatrixChart
              ) => {
                addStateCallback(config, instance);
              },
              chartDidDataChanged: (
                config: MatrixConfigType,
                instance: MatrixChart
              ) => {
                addStateCallback(config, instance);
              },
            },
          },
          { ...theme }
        );
        return matrix;
      }
    );
  }

  initQueue(addStateCallback) {
    return this.map.set(
      'queue',
      (config: DsQueueConfigType, theme: DsQueueThemeType) => {
        const queue = new DsQueue(
          {
            ...config,
            lifeCircle: {
              chartDidChartInit: (
                config: QueueChartConfigType,
                instance: QueueChart
              ) => {
                addStateCallback(config, instance);
              },
              chartDidDataChanged: (
                config: QueueChartConfigType,
                instance: QueueChart
              ) => {
                addStateCallback(config, instance);
              },
            },
          },
          { ...theme }
        );
        return queue;
      }
    );
  }

  initStack(addStateCallback) {
    return this.map.set(
      'stack',
      (config: DsStackConfigType, theme: DsStackThemeType) => {
        const stack = new DsStack(
          {
            ...config,
            lifeCircle: {
              chartDidChartInit: (
                config: StackChartConfigType,
                instance: StackChart
              ) => {
                addStateCallback(config, instance);
              },
              chartDidDataChanged: (
                config: StackChartConfigType,
                instance: StackChart
              ) => {
                addStateCallback(config, instance);
              },
            },
          },
          { ...theme }
        );
        return stack;
      }
    );
  }

  initLinkedList(addStateCallback) {
    return this.map.set(
      'linkedList',
      (config: DsLinkedListConfigType, theme: DsLinkedListThemeType) => {
        const stack = new DsLinkedList(
          {
            ...config,
            lifeCircle: {
              chartDidChartInit: (
                config: LinkedListConfigType,
                instance: LinkedListChart
              ) => {
                addStateCallback(config, instance);
              },
              chartDidDataChanged: (
                config: LinkedListConfigType,
                instance: LinkedListChart
              ) => {
                addStateCallback(config, instance);
              },
            },
          },
          { ...theme }
        );
        return stack;
      }
    );
  }

  initTree(addStateCallback) {
    return this.map.set(
      'tree',
      (config: DsTreeConfigType, theme: DsTreeThemeType) => {
        const tree = new DsTree(
          {
            ...config,
            lifeCircle: {
              chartDidChartInit: (
                config: TreeConfigType,
                instance: TreeChart
              ) => {
                addStateCallback(config, instance);
              },
              chartDidDataChanged: (
                config: TreeConfigType,
                instance: TreeChart
              ) => {
                addStateCallback(config, instance);
              },
            },
          },
          { ...theme }
        );
        return tree;
      }
    );
  }

  initBinaryTree(addStateCallback) {
    return this.map.set(
      'binaryTree',
      (config: DsBinaryTreeConfigType, theme: DsBinaryTreeThemeType) => {
        const binaryTree = new DsBinaryTree(
          {
            ...config,
            lifeCircle: {
              chartDidChartInit: (
                config: BinaryTreeConfigType,
                instance: BinaryTreeChart
              ) => {
                addStateCallback(config, instance);
              },
              chartDidDataChanged: (
                config: BinaryTreeConfigType,
                instance: BinaryTreeChart
              ) => {
                addStateCallback(config, instance);
              },
            },
          },
          { ...theme }
        );
        return binaryTree;
      }
    );
  }

  initGraph(addStateCallback) {
    return this.map.set(
      'graph',
      (config: DsGraphConfigType, theme: DsGraphThemeType) => {
        const graph = new DsGraph(
          {
            ...config,
            lifeCircle: {
              chartDidChartInit: (
                config: GraphConfigType,
                instance: GraphChart
              ) => {
                addStateCallback(config, instance);
              },
              chartDidDataChanged: (
                config: GraphConfigType,
                instance: GraphChart
              ) => {
                addStateCallback(config, instance);
              },
            },
          },
          { ...theme }
        );
        return graph;
      }
    );
  }

  create(config: DsConfigType, theme: DsThemeType) {
    const func = this.map.get(config.type);
    return func(config, theme);
  }
}
