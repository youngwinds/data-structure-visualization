import {
  QueueChart,
  QueueChartDataType,
  QueueChartItemType,
} from '@dsv-charts/charts';
import { DsQueueConfigType, DsQueueThemeType } from './type';

import { merge } from 'lodash';

let key = 0;

const createQueueItem = (d: QueueChartItemType | number | string) => {
  if (typeof d === 'number') {
    return {
      key: `__${key++}__`,
      value: d,
      name: String(d),
    };
  } else if (typeof d === 'string') {
    return {
      key: `__${key++}__`,
      value: d,
      name: d,
    };
  } else {
    return {
      key: `__${key++}__`,
      value: d.value,
      name: String(d.name),
    };
  }
};

class DsQueue extends QueueChart {
  constructor(customConfig: DsQueueConfigType, customTheme: DsQueueThemeType) {
    super(
      'container',
      merge({}, customConfig, {
        data: customConfig.data.map((d) => createQueueItem(d)),
      }),
      customTheme
    );
    super.render();
  }

  public destroy(): void {
    super.destroy();
  }

  private warpMethod(callback) {
    const data = this.getData() as QueueChartDataType;
    const returnValue = callback(data);
    super.setData(data);
    return returnValue;
  }

  public remove() {
    return this.warpMethod((data) => data.shift().value);
  }

  public add(...args) {
    return this.warpMethod((data) => data.push(...args.map(createQueueItem)));
  }

  public element() {
    const data = this.getData() as QueueChartDataType;
    return data[0].value;
  }

  public getSize() {
    const data = this.getData() as QueueChartDataType;

    return data.length;
  }

  get length() {
    const data = this.getData() as QueueChartDataType;

    return data.length;
  }
}

export { DsQueue, DsQueueConfigType, DsQueueThemeType };
