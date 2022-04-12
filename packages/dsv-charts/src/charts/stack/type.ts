import { StateType } from './../../types/state/index';
import {
  IChartLifeCircle,
  TransitionType,
  Cartesian2LayoutConfigType,
} from '@dsv-charts/types';

type StackChartItemType = { key: string; name: string; value: string | number };

type StackChartDataType = StackChartItemType[];

type StackChartConfigType = {
  type: 'stack';
  data: StackChartDataType;
  state?: StateType;
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type StackChartThemeType = {
  type: 'stack';
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

export {
  StackChartItemType,
  StackChartDataType,
  StackChartConfigType,
  StackChartThemeType,
};
