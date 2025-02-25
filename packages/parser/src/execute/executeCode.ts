import { Schema, SchemaBuilder } from "schema";
import { uuid } from "../utils/uuid";
import { ArrayProxy } from "../data-structures/array/array-proxy";
import { withLog } from "utils";
// 执行代码
export const executeCode = withLog<Record<string, any>>((code: string) => {
  try {
    const exeFunc = new Function("ArrayProxy", "__GlobalContext__", code);

    const __GlobalContext__: Record<string, any> = {
      uuid,
      code,
      schema: {},
      SchemaBuilder,
      snapshotSchema: (schema: Schema) => {
        __GlobalContext__.schema = schema;
      },
    };
    exeFunc(ArrayProxy, __GlobalContext__);

    return __GlobalContext__;
  } catch (e) {
    console.error(e);
    throw new Error("ExecuteCode Error");
  }
}, "executeCode");
