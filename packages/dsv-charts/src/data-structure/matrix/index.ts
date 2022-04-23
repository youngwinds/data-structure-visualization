import {
  MatrixChart,
  MatrixDataType,
  MatrixItemType,
} from '@dsv-charts/charts';

import { merge } from 'lodash';
import { DsMatrixConfigType, DsMatrixThemeType } from './type';

let key = 0;

const createMatrixItem = (d: MatrixItemType | number | string) => {
  if (typeof d === 'number') {
    return {
      key: `__${key++}__`,
      value: d,
      name: String(d),
    };
  } else if (typeof d === 'string') {
    return {
      key: `__${key++}__`,
      value: d,
      name: d,
    };
  } else {
    return {
      key: `__${key++}__`,
      value: d.value,
      name: String(d.value),
    };
  }
};

class DsMatrix extends MatrixChart {
  constructor(
    customConfig: DsMatrixConfigType,
    customTheme: DsMatrixThemeType
  ) {
    super(
      'container',
      merge(customConfig, {
        data: customConfig.data.map((d) => createMatrixItem(d)),
      }),
      customTheme
    );
    super.render();
  }
}

export { DsMatrix, DsMatrixConfigType, DsMatrixThemeType };
