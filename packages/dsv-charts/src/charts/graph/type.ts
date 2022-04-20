import { StateType } from './../../types/state/index';
import { IChartLifeCircle } from '@dsv-charts/types';
import { TransitionType } from './../../types/transition/index';
import { Cartesian2LayoutConfigType } from './../../types/layout/index';

type GraphNodeType = {
  index?: number;
  name: string;
  value: string | number;
  state: string;
  x?: number;
  y?: number;
  vs?: number;
  vy?: number;
};

type GraphLinkType = {
  index?: number;
  state?: string;
  source: GraphNodeType;
  target: GraphNodeType;
};

type GraphDataType = {
  nodes: Array<GraphNodeType>;
  links: Array<GraphLinkType>;
};

type GraphConfigType = {
  type: 'graph';
  data: GraphDataType;
  state?: StateType;
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type GraphThemeType = {
  type: 'graph';
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
  GraphLinkType,
  GraphNodeType,
  GraphDataType,
  GraphConfigType,
  GraphThemeType,
};
