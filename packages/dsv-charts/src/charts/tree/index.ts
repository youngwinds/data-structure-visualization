import { IChart } from '../../typings/IChart';

export class TreeChart implements IChart {
  constructor() {
    this.init();
  }

  init() {
    console.log('init ArrayChart');
  }

  render() {
    console.log('render ArrayChart');
  }

  destroy() {
    console.log('destroy ArrayChart');
  }
}
