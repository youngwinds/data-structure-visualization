import {
  StackDataType,
  StackItemType,
  IConfig,
  ITheme,
} from '@dsv-charts/typings';
import { StackChart } from './stack';
import { createStackItem } from '@dsv-charts/utils';
import { merge } from 'lodash';

class DsStack extends StackChart {
  constructor(customConfig: IConfig, customTheme: ITheme) {
    super(
      'container',
      merge(customConfig, {
        data: customConfig.data.map((d) => {
          if (typeof d === 'number') {
            return createStackItem(d);
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
    const data: StackDataType = this.getData();
    const returnValue = callback(data);
    super.setData(data);
    return returnValue;
  }

  public pop() {
    return this.warpMethod((data) => data.pop());
  }

  public push(...args: number[]) {
    return this.warpMethod((data) => data.push(...args.map(createStackItem)));
  }

  public top() {
    const data = this.getData();
    return data[data.length - 1].value;
  }

  public isEmpty() {
    const data = this.getData();
    return !data.length;
  }
}

export { StackChart, DsStack };
