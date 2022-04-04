import { ArrayChartThemeType, ArrayChartDataType } from '@dsv-charts/charts';
import { Cartesian2LayoutConfigType } from '@dsv-charts/components/layouts';
import { IChartLifeCircle } from '@dsv-charts/types';

export type DSArrayConfigType = {
  type: 'array';
  data: ArrayChartDataType | number[] | string[];
  layout?: Cartesian2LayoutConfigType;
  transition?: {
    duration?: number;
  };
  lifeCircle?: IChartLifeCircle;
};

export type DsArrayThemeType = ArrayChartThemeType;
