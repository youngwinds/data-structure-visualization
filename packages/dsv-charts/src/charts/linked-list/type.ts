import { StateType } from './../../types/state/index';
import { IChartLifeCircle } from '@dsv-charts/types';
import { TransitionType } from './../../types/transition/index';
import { Cartesian2LayoutConfigType } from './../../types/layout/index';

type LinkedNodeType = {
  key?: string;
  name: string;
  value: string | number;
  x?: number;
  y?: number;
};

type LinkedLinkType = {
  source: LinkedNodeType;
  target: LinkedNodeType;
};

type LinkedListDataType = {
  nodes: Array<LinkedNodeType>;
  links: Array<LinkedLinkType>;
};

type LinkedListConfigType = {
  type: 'linkedList';
  data: LinkedListDataType;
  state?: StateType;
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type LinkedListThemeType = {
  type: 'linkedList';
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
  LinkedLinkType,
  LinkedNodeType,
  LinkedListDataType,
  LinkedListConfigType,
  LinkedListThemeType,
};
