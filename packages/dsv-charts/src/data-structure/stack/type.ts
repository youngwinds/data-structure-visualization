import { StackChartThemeType, StackChartDataType } from '@dsv-charts/charts';
import { Cartesian2LayoutConfigType } from '@dsv-charts/types';
import { IChartLifeCircle, TransitionType } from '@dsv-charts/types';

type DsStackConfigType = {
  type: 'stack';
  data: StackChartDataType | number[] | string[];
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type DsStackThemeType = StackChartThemeType;

export { DsStackConfigType, DsStackThemeType };
