import {
  ArrayDataType,
  ArrayItemType,
  DataType,
  IConfig,
} from '@dsv-charts/typings/config';
import { ArrayChart } from './array';

class DsArray extends ArrayChart {
  private _key = 0;

  constructor(selector: string | HTMLElement, customConfig: IConfig) {
    super(selector, customConfig);

    super.render();
  }

  private warpMethod(callback) {
    const data: ArrayDataType = this.getData();

    const returnValue = callback(data);

    console.log(data);

    super.updateData(data);
    return returnValue;
  }

  private create(value: number) {
    return {
      key: `__${this._key++}__`,
      value: value,
      name: value.toString(),
    };
  }

  public push(...args: number[]) {
    return this.warpMethod((data) =>
      data.push(...args.map(this.create.bind(this)))
    );
  }

  public pop() {
    return this.warpMethod((data) => data.pop());
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

  public reverse() {
    return this.warpMethod((data: DataType) => {
      return data.reverse();
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
      const newItems = items.map((d) => this.create(d));
      return this.warpMethod((data) => {
        return data.splice(start, deleteCount, ...newItems);
      });
    }
  }

  public set(index: number, value: number) {
    const data = this.getData();

    const item: ArrayItemType = data[index];
    item.value = value;
    item.name = value.toString();

    super.updateData(data);
  }

  public get(index: number) {
    const data = this.getData();

    return data[index];
  }

  public destroy(): void {
    super.destroy();
  }
}

export { ArrayChart, DsArray };
