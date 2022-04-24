import { StateType } from './../../types/state/index';
import {
  IChartLifeCircle,
  TransitionType,
  Cartesian2LayoutConfigType,
} from '@dsv-charts/types';

type MatrixItemType = {
  key?: string;
  name?: string;
  value?: string | number;
  state?: string;
  rowIndex?: number;
  colIndex?: number;
};

type MatrixDataType = MatrixItemType[][];

type MatrixConfigType = {
  type: 'matrix';
  data: MatrixDataType;
  state?: StateType;
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type MatrixThemeType = {
  type: 'matrix';
  colorScheme?: string[];
  text?: {
    color?: string;
  };
  border?: {
    color?: string;
    width?: number | string;
  };
  arrow?: {
    color?: string;
    width?: number | string;
  };
};

export { MatrixItemType, MatrixDataType, MatrixConfigType, MatrixThemeType };
