import { uid } from '@dsv/utils';
import { ArrayItemData, Index } from './type';

class ArrayItem<T> {
  private data: ArrayItemData<T>;

  constructor(value: T, index: Index) {
    this.data = {
      key: uid('ArrayItem'),
      index: index,
      value: value,
    };
  }

  set(value: T) {
    this.data = {
      ...this.data,
      value: value,
    };
  }

  get() {
    return this.data.value;
  }
}

export { ArrayItem };
