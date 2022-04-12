import { StateType } from './../../types/state/index';
import { IChartLifeCircle } from '@dsv-charts/types';
import { TransitionType } from './../../types/transition/index';
import { Cartesian2LayoutConfigType } from './../../types/layout/index';

type TreeNodeType = {
  key: string;
  name: string;
  value: string | number;
  children: TreeNodeType[];
};

type TreeDataType = TreeNodeType;

type TreeConfigType = {
  type: 'tree';
  data: TreeDataType;
  state?: StateType;
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type TreeThemeType = {
  type: 'tree';
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

export { TreeNodeType, TreeDataType, TreeConfigType, TreeThemeType };
