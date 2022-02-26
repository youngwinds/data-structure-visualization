let uniqueKey = 0;

export function createArrayItem(value: string | number) {
  return {
    key: `__key__${uniqueKey++}`,
    value: value,
    name: value.toString(),
  };
}
