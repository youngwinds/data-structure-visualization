import {
  ArrayChart,
  ArrayChartDataType,
  ArrayChartItemType,
} from '@dsv-charts/charts';

import { merge } from 'lodash';
import { isNumber, isString } from '@dsv-charts/utils/type-check';
import { DsArrayConfigType, DsArrayThemeType } from './type';

let key = 0;

const createArrayItem = (d: ArrayChartItemType | number | string) => {
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

class DsArray extends ArrayChart {
  constructor(customConfig: DsArrayConfigType, customTheme: DsArrayThemeType) {
    super(
      'container',
      merge({}, customConfig, {
        data: customConfig.data.map((d) => createArrayItem(d)),
      }),
      customTheme
    );
    super.render();
  }

  public destroy(): void {
    super.destroy();
  }

  private warpMethod(callback) {
    const data = super.getData() as ArrayChartDataType;
    const returnValue = callback(data);
    super.setData(data);
    return returnValue;
  }

  public fill(value, start?: number, end?: number) {
    return this.warpMethod((data: ArrayChartDataType) => {
      start = start ? start : 0;
      end = end ? end : data.length;

      for (let i = start; i < end; i++) {
        data[i].value = value;
        data[i].name = value.toString();
      }

      return data;
    });
  }

  public pop() {
    return this.warpMethod((data) => data.pop().value);
  }

  public push(...args: (string | number)[]) {
    return this.warpMethod((data) => data.push(...args.map(createArrayItem)));
  }

  public shift() {
    return this.warpMethod((data) => data.shift().value);
  }

  public unshift(...args) {
    return this.warpMethod((data) =>
      data.unshift(...args.map(createArrayItem))
    );
  }

  public reverse() {
    return this.warpMethod((data: ArrayChartDataType) => {
      return data.reverse();
    });
  }

  public sort(
    compareFunction?: (a: number | string, b: number | string) => number
  ) {
    const cf = (a: number | string, b: number | string) => {
      if (isNumber(a) && isNumber(b)) {
        compareFunction = compareFunction
          ? compareFunction
          : (a: number, b: number) => a - b;
        return compareFunction(a, b);
      } else if (isString(a) && isString(b)) {
        compareFunction = compareFunction
          ? compareFunction
          : (a: string, b: string) => a.codePointAt(0) - b.codePointAt(0);
        return compareFunction(a, b);
      }
    };
    return this.warpMethod((data: ArrayChartDataType) => {
      return data.sort((a: ArrayChartItemType, b: ArrayChartItemType) => {
        return cf(a.value, b.value);
      });
    });
  }

  public splice(start = 0, deleteCount?: number, ...items: number[]) {
    if (arguments.length === 1) {
      return this.warpMethod((data) => {
        data.splice(start);
      });
    } else if (arguments.length === 2) {
      return this.warpMethod((data) => {
        data.splice(start, deleteCount);
      });
    } else {
      const newItems = items.map((d) => createArrayItem(d));
      return this.warpMethod((data) => {
        return data.splice(start, deleteCount, ...newItems);
      });
    }
  }

  public swap(index1, index2) {
    return this.warpMethod((data: ArrayChartDataType) => {
      const tempData = data[index1];
      data[index1] = data[index2];
      data[index2] = tempData;
    });
  }

  public set(index: number, value: number) {
    return this.warpMethod((data: ArrayChartDataType) => {
      data[index].value = value;
      data[index].name = String(value);
      return value;
    });
  }

  public get(index: number) {
    const data = super.getConfigByKey('data');
    return data[index].value;
  }

  public getSize() {
    const data = super.getConfigByKey('data');
    return data.length;
  }
}

export { DsArray, DsArrayConfigType, DsArrayThemeType };
