let uniqueKey = 0;

export function createArrayItem(value: string | number) {
  return {
    key: `__array__key__${uniqueKey++}`,
    value: value,
    name: value.toString(),
  };
}
