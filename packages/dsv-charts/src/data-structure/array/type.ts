import { ArrayChartThemeType, ArrayChartDataType } from '@dsv-charts/charts';
import { Cartesian2LayoutConfigType } from '@dsv-charts/types';
import { IChartLifeCircle, TransitionType } from '@dsv-charts/types';

type DsArrayConfigType = {
  type: 'array';
  data: ArrayChartDataType | number[] | string[];
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type DsArrayThemeType = ArrayChartThemeType;

export { DsArrayConfigType, DsArrayThemeType };
