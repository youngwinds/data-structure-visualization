import { IConfig, ITheme, QueueDataType } from '@dsv-charts/typings';
import { QueueChart } from './queue';
import { createArrayItem } from '@dsv-charts/utils';
import { merge } from 'lodash';

class DsQueue extends QueueChart {
  constructor(customConfig: IConfig, customTheme: ITheme) {
    super(
      'container',
      merge(customConfig, {
        data: customConfig.data.map((d) => {
          if (typeof d === 'number') {
            return createArrayItem(d);
          }
        }),
      }),
      customTheme
    );
    super.render();
  }

  public destroy(): void {
    super.destroy();
  }

  private warpMethod(callback) {
    const data: QueueDataType = this.getData();
    const returnValue = callback(data);
    super.setData(data);
    return returnValue;
  }

  public remove() {
    return this.warpMethod((data) => data.shift().value);
  }

  public add(...args: number[]) {
    return this.warpMethod((data) => data.push(...args.map(createArrayItem)));
  }

  public element() {
    const data: QueueDataType = this.getData();
    return data[0].value;
  }

  public getSize() {
    return this.getConfigByKey('data').length;
  }
}

export { QueueChart, DsQueue };
