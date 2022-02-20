interface ChartMap {
  [key: string]: Function;
}

const CHARTS_MAP: ChartMap = {};

/**
 * 根据type获取图表
 * @param type
 * @returns
 */
export function getChart(type: string) {
  const key = type.toLowerCase();
  if (key in CHARTS_MAP) {
  }
  return CHARTS_MAP[type.toLowerCase()];
}

/**
 * 注册图表并且获取类型
 * @param type
 * @returns
 */
export function registerChart(type: string, chart: any) {
  CHARTS_MAP[type.toLowerCase()] = chart;
}
