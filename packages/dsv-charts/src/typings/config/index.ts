import { ILifeCircle } from './life-circle/index';
import { ArrayKeyType, ArrayDataType } from './charts/array';
import { Cartesian2LayoutType } from './layouts/cartesian2';
import { TransitionType } from './transition';

export * from './layouts/cartesian2';
export * from './charts/array';
export * from './transition';
export * from './life-circle';

export type DataType = ArrayDataType | undefined;

export type LayoutType = Cartesian2LayoutType | undefined;

export interface IConfig {
  type: ArrayKeyType | 'tree' | 'stack' | undefined;
  layout?: LayoutType;
  data?: DataType;
  transition?: TransitionType;
  lifeCircle?: ILifeCircle;
}

export type IConfigKeys = keyof IConfig;
