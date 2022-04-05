import { QueueChartThemeType, QueueChartDataType } from '@dsv-charts/charts';
import { Cartesian2LayoutConfigType } from '@dsv-charts/types';
import { IChartLifeCircle, TransitionType } from '@dsv-charts/types';

type DsQueueConfigType = {
  type: 'queue';
  data: QueueChartDataType | number[] | string[];
  layout?: Cartesian2LayoutConfigType;
  transition?: TransitionType;
  lifeCircle?: IChartLifeCircle;
};

type DsQueueThemeType = QueueChartThemeType;

export { DsQueueConfigType, DsQueueThemeType };
