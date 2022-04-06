import {
  IChartLifeCircle,
  TransitionType,
  Cartesian2LayoutConfigType,
} from '@dsv-charts/types';

type ArrayChartItemType = { key: string; name: string; value: string | number };

type ArrayChartDataType = ArrayChartItemType[];

type ArrayChartConfigType = {
  type: 'array';
  data: ArrayChartDataType;
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type ArrayChartThemeType = {
  type: 'array';
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
  ArrayChartItemType,
  ArrayChartDataType,
  ArrayChartConfigType,
  ArrayChartThemeType,
};
