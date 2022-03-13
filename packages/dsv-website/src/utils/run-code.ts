import { DsArray } from '@dsv-charts/charts';

export function runCode(code: string) {
  const chartContainer = document.querySelector('#container');
  chartContainer && (chartContainer.innerHTML = '');
  const runFun = new Function('DsArray', code);
  runFun(DsArray);
}
