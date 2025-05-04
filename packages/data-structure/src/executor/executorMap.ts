import { StructureType } from "schema";
import { DSVArray } from "../data-structures";

export const StructureExecutorMap = {
  [StructureType.Array]: DSVArray,
  [StructureType.BinaryTree]: DSVArray,
};
