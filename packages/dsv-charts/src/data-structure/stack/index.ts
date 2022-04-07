import {
  StackChart,
  StackChartDataType,
  StackChartItemType,
} from '@dsv-charts/charts';
import { DsStackConfigType, DsStackThemeType } from './type';

import { merge } from 'lodash';

let key = 0;

const createStackItem = (d: StackChartItemType | number | string) => {
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
      name: String(d.value),
    };
  }
};

class DsStack extends StackChart {
  constructor(customConfig: DsStackConfigType, customTheme: DsStackThemeType) {
    super(
      'container',
      merge({}, customConfig, {
        data: customConfig.data.map((d) => createStackItem(d)),
      }),
      customTheme
    );
    super.render();
  }

  public destroy(): void {
    super.destroy();
  }

  private warpMethod(callback) {
    const data = this.getData() as StackChartDataType;
    const returnValue = callback(data);
    super.setData(data);
    return returnValue;
  }

  public pop() {
    return this.warpMethod((data) => data.pop().value);
  }

  public push(...args: number[]) {
    return this.warpMethod((data) => data.push(...args.map(createStackItem)));
  }

  public top() {
    const data = this.getData() as StackChartDataType;
    return data[data.length - 1].value;
  }

  public isEmpty() {
    const data = this.getData() as StackChartDataType;
    return !data.length;
  }
}

export { DsStack, DsStackConfigType, DsStackThemeType };
