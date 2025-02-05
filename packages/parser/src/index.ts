import { transformCode } from "./transform/transformCode";
import { executeCode } from "./execute/executeCode";
import { logStyle } from "./utils/log";

export const run = (code: string) => {
  console.group(`%cMessage`, logStyle);
  
  const transformedCode = transformCode(code);

  executeCode(transformedCode);
  console.groupEnd();
};
