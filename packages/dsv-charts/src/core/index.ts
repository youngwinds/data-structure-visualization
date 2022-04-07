import { DsConfigType } from '@dsv-charts/data-structure';

import {
  ArrayChart,
  ArrayChartConfigType,
  QueueChart,
  QueueChartConfigType,
  StackChart,
  StackChartConfigType,
  LinkedListChart,
  LinkedListConfigType,
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
} from '@dsv-charts/data-structure';

export class Dsv {
  private map = new Map<'array' | 'stack' | 'queue' | 'linkedList', Function>();
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
                data: ArrayChartConfigType,
                instance: ArrayChart
              ) => {
                addStateCallback(data, instance);
              },
              chartDidDataChanged: (
                data: ArrayChartConfigType,
                instance: ArrayChart
              ) => {
                addStateCallback(data, instance);
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
                data: QueueChartConfigType,
                instance: QueueChart
              ) => {
                addStateCallback(data, instance);
              },
              chartDidDataChanged: (
                data: QueueChartConfigType,
                instance: QueueChart
              ) => {
                addStateCallback(data, instance);
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
                data: StackChartConfigType,
                instance: StackChart
              ) => {
                addStateCallback(data, instance);
              },
              chartDidDataChanged: (
                data: StackChartConfigType,
                instance: StackChart
              ) => {
                addStateCallback(data, instance);
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
                data: LinkedListConfigType,
                instance: LinkedListChart
              ) => {
                addStateCallback(data, instance);
              },
              chartDidDataChanged: (
                data: LinkedListConfigType,
                instance: LinkedListChart
              ) => {
                addStateCallback(data, instance);
              },
            },
          },
          { ...theme }
        );
        return stack;
      }
    );
  }

  create(config: DsConfigType) {
    const func = this.map.get(config.type);
    return func(config);
  }
}
