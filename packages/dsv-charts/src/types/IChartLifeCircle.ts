import { Chart, ConfigType } from '@dsv-charts/types';

export interface IChartLifeCircle {
  chartDidChartInit?: (configType: ConfigType, chart: Chart) => void;
  chartDidDataChanged?: (configType: ConfigType, chart: Chart) => void;
  chartWillDataChanged?: (configType: ConfigType, chart: Chart) => void;
  chartWillDestroyed?: (configType: ConfigType, chart: Chart) => void;
  chartDidDestroyed?: (configType: ConfigType, chart: Chart) => void;
}

export type IChartLifeCircleKeys = keyof IChartLifeCircle;
