import { LinkedListThemeType, LinkedListDataType } from '@dsv-charts/charts';
import { Cartesian2LayoutConfigType } from '@dsv-charts/types';
import { IChartLifeCircle, TransitionType } from '@dsv-charts/types';

type DsLinkedListConfigType = {
  type: 'linkedList';
  data: LinkedListDataType | number[] | string[];
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type DsLinkedListThemeType = LinkedListThemeType;

export { DsLinkedListConfigType, DsLinkedListThemeType };
