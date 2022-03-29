import { ILifeCircle } from './life-circle/index';
import { Cartesian2LayoutType } from './layouts/cartesian2';
import { TransitionType } from './transition';

import { ArrayKeyType, ArrayDataType } from './charts/array';
import { StackKeyType, StackDataType } from './charts/stack';

export * from './charts/array';
export * from './charts/stack';

export * from './layouts/cartesian2';
export * from './transition';
export * from './life-circle';

export type DataType = ArrayDataType | StackDataType | undefined;

export type LayoutType = Cartesian2LayoutType | undefined;

export type ChartType = ArrayKeyType | StackKeyType;

export interface IConfig {
  type: ChartType;
  layout?: LayoutType;
  data?: DataType;
  transition?: TransitionType;
  lifeCircle?: ILifeCircle;
}

export type IConfigKeys = keyof IConfig;
