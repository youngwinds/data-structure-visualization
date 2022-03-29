import {
  ArrayDataType,
  ArrayItemType,
  DataType,
  IConfig,
  ITheme,
} from '@dsv-charts/typings';
import { ArrayChart } from './array';
import { createArrayItem } from '@dsv-charts/utils';
import { merge } from 'lodash';

class DsArray extends ArrayChart {
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
    const data: ArrayDataType = this.getData();
    const returnValue = callback(data);
    super.setData(data);
    return returnValue;
  }

  public fill(value, start?: number, end?: number) {
    return this.warpMethod((data: ArrayDataType) => {
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
    return this.warpMethod((data) => data.pop());
  }

  public push(...args: number[]) {
    return this.warpMethod((data) => data.push(...args.map(createArrayItem)));
  }

  public reverse() {
    return this.warpMethod((data: DataType) => {
      return data.reverse();
    });
  }

  public sort(compareFunction?: (a: number, b: number) => number) {
    const cf = (a: number, b: number) => {
      compareFunction = compareFunction ? compareFunction : (a, b) => a - b;
      return compareFunction(a, b);
    };
    return this.warpMethod((data: DataType) => {
      return data.sort((a, b) => {
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
}

export { ArrayChart, DsArray };
