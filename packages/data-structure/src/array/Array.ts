import { ArrayItem } from './ArrayItem';
import { Index, Value } from './type';

class Array<T> {
  public data: ArrayItem<T>[] = [];

  constructor(values: T[]) {
    this.data = values.map((val, i) => new ArrayItem(val, i));
  }

  /**
   * 获取数组的长度。
   * @returns 返回数组的长度。
   */
  get length() {
    return this.data.length;
  }

  /**
   * 将数组中指定索引的元素设置为指定的值。
   * @param value 要设置的值。
   * @param index 要设置的元素的索引。
   */
  setValue(value: T, index: Index): void {
    this.data[index].set(value);
  }

  /**
   * 获取数组中指定索引的元素。
   * @param index 要获取的元素的索引。
   * @returns 返回指定索引的元素。
   */
  getValue(index: Index) {
    return this.data[index].get();
  }

  /**
   * 将数组中指定索引的元素和另一个索引的元素交换位置。
   * @param index1 要交换的元素的索引。
   * @param index2 要交换的另一个元素的索引。
   */
  swap(index1: Index, index2: Index): void {
    const temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  }

  /**
   * 移除数组的最后一个元素，并返回该元素的值。
   * @returns 返回移除的元素的值。
   */
  pop(): T | null {
    const item = this.data.pop();
    return item ? item.get() : null;
  }

  /**
   * 在数组的末尾添加一个元素，并返回新数组的长度。
   * @param value 要添加的元素的值。
   * @returns 返回新数组的长度。
   */
  push(value: T): number {
    const index = this.data.length;
    this.data.push(new ArrayItem(value, index));
    return this.data.length;
  }

  /**
   * 对数组中的每个元素执行指定的操作。
   * @param callbackfn 用于处理每个元素的函数。
   */
  forEach(callbackfn: (value: T, index: Index, array: Array<T>) => void): void {
    this.data.forEach((item, index) => {
      callbackfn(item.get(), index, this);
    });
  }

  /**
   * 对数组中的每个元素执行指定的操作，并返回一个新数组，其中包含每个元素的处理结果。
   * @param callbackfn 用于处理每个元素的函数。
   * @returns 返回一个新数组，其中包含每个元素的处理结果。
   */
  map(callbackfn: (value: T, index: Index, array: Array<T>) => any): any[] {
    return this.data.map((item, index) => {
      return callbackfn(item.get(), index, this);
    });
  }

  /**
   * 对数组进行排序。
   * @param compareFn 用于比较元素的函数。
   */
  sort(compareFn: (a: T, b: T) => number): void {
    this.data.sort((a, b) => compareFn(a.get(), b.get()));
  }
}

export { Array };
