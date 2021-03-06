import { Dsv } from '@dsv-charts/core';

export function runCode(code: string, didSetData: Function) {
  const chartContainer = document.querySelector('#container');
  chartContainer && (chartContainer.innerHTML = '');

  const dsv = Dsv.getInstance(didSetData);

  try {
    const runFun = new Function('dsv', code);
    runFun(dsv);
  } catch (e) {
    console.log(e);
  }
}
