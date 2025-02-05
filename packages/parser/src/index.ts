import * as babel from "@babel/core";
import { arrayVisitor } from "./array-visitor";
import { ArrayProxyString } from "./array-proxy";

export const run = () => {
  // 准备BubbleSort算法
  const bubbleSortCode = `
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const arr = [5, 3, 8, 4, 2];
arr.push(1);
bubbleSort(arr);

console.log(schema)
console.log(arr)
`;

  // 使用Babel解析代码

  // 转换代码
  const transformCode = (code: string) => {
    const result = babel.transformSync(code, {
      plugins: [arrayVisitor],
      ast: true,
    });

    const preset = `
${ArrayProxyString};
const schema = [];
`;
    return [preset, result?.code].join("\n\n");
  };

  const transformedCode = transformCode(bubbleSortCode);
  eval(transformedCode);
};
