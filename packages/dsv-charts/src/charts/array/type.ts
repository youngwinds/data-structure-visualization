import {
  StateType,
  IChartLifeCircle,
  TransitionType,
  Cartesian2LayoutConfigType,
} from '@dsv-charts/types';

type ArrayChartItemType = {
  key: string;
  name: string;
  value: string | number;
  state?: string;
};

type ArrayChartDataType = ArrayChartItemType[];

type ArrayChartConfigType = {
  type: 'array';
  data: ArrayChartDataType;
  state?: StateType;
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type ArrayChartThemeType = {
  type: 'array';
  colorScheme?: string[];
  text?: {
    color?: string;
    size?: number;
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
  ArrayChartItemType,
  ArrayChartDataType,
  ArrayChartConfigType,
  ArrayChartThemeType,
};
