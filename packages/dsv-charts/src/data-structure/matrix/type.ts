import { MatrixThemeType, MatrixDataType } from '@dsv-charts/charts';
import { Cartesian2LayoutConfigType } from '@dsv-charts/types';
import { IChartLifeCircle, TransitionType } from '@dsv-charts/types';

type DsMatrixConfigType = {
  type: 'queue';
  data: (string | number)[][];
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type DsMatrixThemeType = MatrixThemeType;

export { DsMatrixConfigType, DsMatrixThemeType };
