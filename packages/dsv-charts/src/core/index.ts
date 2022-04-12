import { DsConfigType, DsThemeType } from '@dsv-charts/data-structure';

import {
  ArrayChart,
  ArrayChartConfigType,
  QueueChart,
  QueueChartConfigType,
  StackChart,
  StackChartConfigType,
  LinkedListChart,
  LinkedListConfigType,
  TreeChart,
  TreeConfigType,
} from '@dsv-charts/charts';

import {
  DsArray,
  DsArrayConfigType,
  DsArrayThemeType,
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
} from '@dsv-charts/data-structure';

export class Dsv {
  private map = new Map<
    'array' | 'stack' | 'queue' | 'linkedList' | 'tree',
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
    this.initStack(addStateCallback);
    this.initQueue(addStateCallback);
    this.initLinkedList(addStateCallback);
    this.initTree(addStateCallback);
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

  create(config: DsConfigType, theme: DsThemeType) {
    const func = this.map.get(config.type);
    return func(config, theme);
  }
}
