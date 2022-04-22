import { StateType } from './../../types/state/index';
import { IChartLifeCircle } from '@dsv-charts/types';
import { TransitionType } from './../../types/transition/index';
import { Cartesian2LayoutConfigType } from './../../types/layout/index';

type BinaryTreeNodeType = {
  key: string;
  name: string;
  value: string | number;
  state?: string;
  children: BinaryTreeNodeType[];
};

type BinaryTreeDataType = BinaryTreeNodeType;

type BinaryTreeConfigType = {
  type: 'binaryTree';
  data: BinaryTreeDataType;
  state?: StateType;
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type BinaryTreeThemeType = {
  type: 'binaryTree';
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
  BinaryTreeNodeType,
  BinaryTreeDataType,
  BinaryTreeConfigType,
  BinaryTreeThemeType,
};
