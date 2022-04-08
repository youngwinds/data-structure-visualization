import { merge } from 'lodash';
import { TreeChart } from '@dsv-charts/charts';
import { DsTreeConfigType, DsTreeThemeType } from './type';

class DsTree extends TreeChart {
  constructor(customConfig: DsTreeConfigType, customTheme: DsTreeThemeType) {
    super('container', merge({}, customConfig), merge({}, customTheme));
  }
}

export { DsTree, DsTreeConfigType, DsTreeThemeType };
