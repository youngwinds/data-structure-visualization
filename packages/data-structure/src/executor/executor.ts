import { Schema } from "schema";
import { DSVArray } from "../data-structures";
import { StructureExecutorMap } from "./executorMap";
import { isFunction } from "lodash-es";

export const executor = (schema: Schema) => {
  // 每一个structure对应一个executor, 在解析actions之前, 构建好.
  const executorMap = new Map<string, DSVArray<string | number>>();
  schema.structures.map((structure) => {
    const ExecutorConstructor = StructureExecutorMap[structure.type];
    if (!ExecutorConstructor) {
      throw new Error(`Executor for structure ${structure.type} not found`);
    }
    const structureExecutor = new ExecutorConstructor<string>(
      structure.array,
      structure
    );
    executorMap.set(structure.id, structureExecutor);
  });

  const runtimeActions = schema.actions.map((schemaAction) => {
    const executor = executorMap.get(schemaAction.structureId);
    if (!executor) {
      throw new Error(
        `Executor for structure ${schemaAction.structureId} not found`
      );
    }

    const actionType = schemaAction.type as keyof DSVArray<string | number>;

    if (executor && isFunction(executor[actionType])) {
      executor.context = {
        currentSchemaAction: schemaAction,
      };
      (executor[actionType] as (...args: any[]) => any)(...schemaAction.args);
    }

    return {
      schemaAction,
      executor,
    };
  });

  return runtimeActions;
};
