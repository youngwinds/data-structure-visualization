import { Chart, ConfigType } from '@dsv-charts/types';

export interface IChartLifeCircle {
  chartDidChartInit?: (ConfigType, Chart) => void;
  chartDidDataChanged?: (ConfigType, Chart) => void;
  chartWillDataChanged?: (ConfigType, Chart) => void;
  chartWillDestroyed?: (ConfigType, Chart) => void;
  chartDidDestroyed?: (ConfigType, Chart) => void;
}

export type IChartLifeCircleKeys = keyof IChartLifeCircle;
