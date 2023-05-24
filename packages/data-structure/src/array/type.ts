export type Color = string;
export type Value = string | number;
export type Key = string;
export type Index = number;

export type ArrayItemData<T> = {
  key: Key;
  value: T;
  index: Index;
  color?: string;
};

export type ArrayData<T> = Array<ArrayItemData<T>>;
