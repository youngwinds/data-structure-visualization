import * as babel from "@babel/core";
import { arrayVisitor } from "../data-structures/array/array-visitor";
import { withLog } from "utils";

export const transformCode = withLog<string>((code: string) => {
  try {
    const presetCodeEnv = ``;

    const result = babel.transformSync(code, {
      plugins: [arrayVisitor],
      ast: true,
    });

    const transformedCode = [presetCodeEnv, result?.code].join("\n\n");
    return transformedCode;
  } catch (e) {
    console.error(e);
    throw new Error("TransformCode Error");
  }
}, "transformCode");
