// 转换代码
export function withLog<T>(fn: Function, name?: string) {
  return function (...args: any): T {
    console.group(`${name ?? fn.name}`);

    console.groupCollapsed(`input`);
    console.log(...args);
    console.groupEnd();

    const result = fn(...args);

    console.groupCollapsed(`output`);
    console.log(result);
    console.groupEnd();

    console.groupEnd();

    return result;
  };
}
