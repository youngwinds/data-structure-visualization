import { ChartType, ConfigType } from '@dsv-charts/charts';

export interface IChartLifeCircle {
  chartDidChartInit?: (configType: ConfigType, chart: ChartType) => void;
  chartDidDataChanged?: (configType: ConfigType, chart: ChartType) => void;
  chartWillDataChanged?: (configType: ConfigType, chart: ChartType) => void;
  chartWillDestroyed?: (configType: ConfigType, chart: ChartType) => void;
  chartDidDestroyed?: (configType: ConfigType, chart: ChartType) => void;
}

export type IChartLifeCircleKeys = keyof IChartLifeCircle;
