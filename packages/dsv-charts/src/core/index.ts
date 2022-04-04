import { DataType, IConfig, ChartType } from '@dsv-charts/typings';
import { DsArray, DsStack, DsQueue } from '../charts';
import { ArrayChart } from '@dsv-charts/re-charts';

export class Dsv {
  private map = new Map<ChartType, Function>();
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
    this.initArrayChart();
  }

  initArrayChart() {
    return this.map.set('arrayChart', (config: IConfig) => {
      const array = new ArrayChart(
        'container',
        {
          ...config,
        },
        {}
      );
      return array;
    });
  }

  initArray(addStateCallback) {
    return this.map.set('array', (config: IConfig) => {
      const array = new DsArray(
        {
          ...config,
          lifeCircle: {
            afterInit: (data: DataType, instance: any) => {
              addStateCallback(data, instance);
            },
            afterSetData: (data: DataType, instance: any) => {
              addStateCallback(data, instance);
            },
          },
        },
        {}
      );
      return array;
    });
  }

  initQueue(addStateCallback) {
    return this.map.set('queue', (config: IConfig) => {
      const array = new DsQueue(
        {
          ...config,
          lifeCircle: {
            afterInit: (data: DataType, instance: any) => {
              addStateCallback(data, instance);
            },
            afterSetData: (data: DataType, instance: any) => {
              addStateCallback(data, instance);
            },
          },
        },
        {}
      );
      return array;
    });
  }

  initStack(addStateCallback) {
    return this.map.set('stack', (config: IConfig) => {
      const stack = new DsStack(
        {
          ...config,
          lifeCircle: {
            afterInit: (data: DataType, instance: any) => {
              addStateCallback(data, instance);
            },
            afterSetData: (data: DataType, instance: any) => {
              addStateCallback(data, instance);
            },
          },
        },
        {}
      );
      return stack;
    });
  }

  create(config: IConfig) {
    const func = this.map.get(config.type);
    return func(config);
  }
}
