import {
  MatrixChart,
  MatrixDataType,
  MatrixItemType,
} from '@dsv-charts/charts';

import { merge } from 'lodash';
import { DsMatrixConfigType, DsMatrixThemeType } from './type';

class DsMatrix extends MatrixChart {
  constructor(
    customConfig: DsMatrixConfigType,
    customTheme: DsMatrixThemeType
  ) {
    super('container', merge({}, customConfig), merge({}, customTheme));
    super.render();
  }
}

export { DsMatrix, DsMatrixConfigType, DsMatrixThemeType };
