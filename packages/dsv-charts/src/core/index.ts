import { ArrayChartDataType, ArrayChart } from '@dsv-charts/charts';
import { DsArray } from '@dsv-charts/data-structure';
import { ConfigType, ThemeType } from '@dsv-charts/types';

export class Dsv {
  private map = new Map<'array', Function>();
  private static instance: Dsv;

  static getInstance(addStateCallback) {
    return this.instance || (this.instance = new Dsv(addStateCallback));
  }

  constructor(addStateCallback) {
    this.init(addStateCallback);
  }

  init(addStateCallback) {
    this.initArray(addStateCallback);
    // this.initStack(addStateCallback);
    // this.initQueue(addStateCallback);
  }

  initArray(addStateCallback) {
    return this.map.set('array', (config: ConfigType, theme: ThemeType) => {
      const array = new DsArray(
        {
          ...config,
          lifeCircle: {
            chartDidChartInit: (
              data: ArrayChartDataType,
              instance: ArrayChart
            ) => {
              addStateCallback(data, instance);
            },
            chartDidDataChanged: (
              data: ArrayChartDataType,
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

  // initQueue(addStateCallback) {
  //   return this.map.set('queue', (config: IConfig) => {
  //     const array = new DsQueue(
  //       {
  //         ...config,
  //         lifeCircle: {
  //           afterInit: (data: DataType, instance: any) => {
  //             addStateCallback(data, instance);
  //           },
  //           afterSetData: (data: DataType, instance: any) => {
  //             addStateCallback(data, instance);
  //           },
  //         },
  //       },
  //       {}
  //     );
  //     return array;
  //   });
  // }

  // initStack(addStateCallback) {
  //   return this.map.set('stack', (config: IConfig) => {
  //     const stack = new DsStack(
  //       {
  //         ...config,
  //         lifeCircle: {
  //           afterInit: (data: DataType, instance: any) => {
  //             addStateCallback(data, instance);
  //           },
  //           afterSetData: (data: DataType, instance: any) => {
  //             addStateCallback(data, instance);
  //           },
  //         },
  //       },
  //       {}
  //     );
  //     return stack;
  //   });
  // }

  create(config: ConfigType) {
    const func = this.map.get(config.type);
    return func(config);
  }
}
