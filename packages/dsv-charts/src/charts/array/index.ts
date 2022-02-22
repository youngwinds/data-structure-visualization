import { ArrayItemType, DataType, IConfig } from '@dsv-charts/typings/config';
import { ArrayChart } from './array';

class DsArray extends ArrayChart {
  private _key = Number.MAX_VALUE;
  constructor(selector: string | HTMLElement, customConfig: IConfig) {
    super(selector, customConfig);

    super.render();
  }

  public pop() {
    const data = this.getData();

    data.pop();

    super.updateData(data);
  }

  public push(value: number) {
    const data = this.getData();

    data.push({
      key: `${this._key--}key`,
      value: value,
      name: value.toString(),
    });

    super.updateData(data);
  }

  public insert(index: number, value: number) {
    const data = this.getData();

    data.splice(index, 0, {
      key: `${this._key--}key`,
      value: value,
      name: value.toString(),
    });

    super.updateData(data);
  }

  public delete(index: number) {
    const data = this.getData();

    data.splice(index, 1);

    super.updateData(data);
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
