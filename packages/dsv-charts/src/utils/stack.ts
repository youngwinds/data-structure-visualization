let uniqueKey = 0;

export function createStackItem(value: string | number) {
  return {
    key: `__stack__key__${uniqueKey++}`,
    value: value,
    name: value.toString(),
  };
}
