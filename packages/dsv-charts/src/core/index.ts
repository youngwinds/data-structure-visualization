import { ArrayKeyType, DataType, IConfig } from '@dsv-charts/typings';
import { DsArray } from '../charts';

export class Dsv {
  private map = new Map<'array' | 'stack' | 'tree', Function>();
  private static instance: Dsv;

  static getInstance(addStateCallback) {
    return this.instance || (this.instance = new Dsv(addStateCallback));
  }

  constructor(addStateCallback) {
    this.map.set('array', (config: IConfig) => {
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

  create(config: IConfig) {
    const func = this.map.get(config.type);
    return func(config);
  }
}
