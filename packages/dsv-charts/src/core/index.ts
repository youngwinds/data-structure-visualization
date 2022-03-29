import { DataType, IConfig, ChartType } from '@dsv-charts/typings';
import { DsArray, DsStack } from '../charts';

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
