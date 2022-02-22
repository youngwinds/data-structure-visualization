import { ArrayKeyType, ArrayDataType } from './charts/array';
import { Cartesian2LayoutType } from './layouts/cartesian2';

export * from './layouts/cartesian2';
export * from './charts/array';

export type DataType = ArrayDataType | undefined;

export type LayoutType = Cartesian2LayoutType | undefined;

export interface IConfig {
  type: ArrayKeyType | 'tree' | 'stack' | undefined;
  layout?: LayoutType;
  data?: DataType;
}

export type IConfigKeys = keyof IConfig;
