import {
  ArrayChart,
  ArrayChartConfigType,
  QueueChart,
  QueueChartConfigType,
  StackChart,
  StackChartConfigType,
} from '@dsv-charts/charts';
import { DsArray, DsQueue, DsStack } from '@dsv-charts/data-structure';
import { ConfigType, ThemeType } from '@dsv-charts/types';

export class Dsv {
  private map = new Map<'array' | 'stack' | 'queue', Function>();
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
  }

  initArray(addStateCallback) {
    return this.map.set('array', (config: ConfigType, theme: ThemeType) => {
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
    });
  }

  initQueue(addStateCallback) {
    return this.map.set('queue', (config: ConfigType, theme: ThemeType) => {
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
    });
  }

  initStack(addStateCallback) {
    return this.map.set('stack', (config: ConfigType, theme: ThemeType) => {
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
    });
  }

  create(config: ConfigType) {
    const func = this.map.get(config.type);
    return func(config);
  }
}
