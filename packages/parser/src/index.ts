import { transformCode } from "./transform/transformCode";
import { executeCode } from "./execute/executeCode";
export { uuid } from "./utils/uuid";
export const run = (code: string) => {
  const transformedCode = transformCode(code);
  const result = executeCode(transformedCode);
  return result;
};
