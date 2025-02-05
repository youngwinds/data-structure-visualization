import * as babel from "@babel/core";
import { arrayVisitor } from "../data-structures/array/array-visitor";
import { logStyle } from "../utils/log";

// 转换代码
export const transformCode = (code: string) => {
  try {
    const presetCodeEnv = ``;

    const result = babel.transformSync(code, {
      plugins: [arrayVisitor],
      ast: true,
    });

    const transformedCode = [presetCodeEnv, result?.code].join("\n\n");

    // 将转换后的代码分组打印，便于调试和查看
    console.groupCollapsed("%cTransformed Code", logStyle);
    console.log(transformedCode);
    console.groupEnd();

    return transformedCode;
  } catch (e) {
    console.error(e);
    throw new Error("TransformCode Error");
  }
};
