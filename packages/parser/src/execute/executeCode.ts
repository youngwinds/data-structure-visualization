import { logStyle } from "../utils/log";
import { Schema, SchemaBuilder } from "schema";
import { uuid } from "../utils/uuid";
import { ArrayProxy } from "../data-structures/array/array-proxy";
// 执行代码
export const executeCode = (code: string) => {
  try {
    console.groupCollapsed("%cExecuted Result", logStyle);

    const exeFunc = new Function("ArrayProxy", "__GlobalContext__", code);

    const __GlobalContext__: Record<string, any> = {
      uuid,
      schema: {},
      SchemaBuilder,
      snapshotSchema: (schema: Schema) => {
        __GlobalContext__.schema = schema;
      },
    };
    const result = exeFunc(ArrayProxy, __GlobalContext__);

    result && console.log(result);
    __GlobalContext__ && console.log(__GlobalContext__);
    console.groupEnd();
  } catch (e) {
    console.error(e);
    throw new Error("ExecuteCode Error");
  }
};
