import { merge } from 'lodash';
import { TreeChart } from '@dsv-charts/charts';
import { DsBinaryTreeConfigType, DsBinaryTreeThemeType } from './type';

class DsBinaryTree extends TreeChart {
  constructor(
    customConfig: DsBinaryTreeConfigType,
    customTheme: DsBinaryTreeThemeType
  ) {
    super('container', merge({}, customConfig), merge({}, customTheme));
  }
}

export { DsBinaryTree, DsBinaryTreeConfigType, DsBinaryTreeThemeType };
