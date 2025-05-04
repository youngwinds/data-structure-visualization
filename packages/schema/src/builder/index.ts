import { uuid } from "utils";
import { SchemaAction, Schema, Structure } from "../types";

export class SchemaBuilder {
  private actions: SchemaAction[] = [];
  private structures: Structure[] = [];

  constructor() {}

  init() {
    this.structures = [];
    this.actions = [];
    return this;
  }

  from(schema: Schema) {
    this.structures = [...(schema.structures ?? [])];
    this.actions = [...(schema.actions ?? [])];
    return this;
  }

  addStructure(structure: Structure) {
    this.structures.push(structure);
    return this;
  }

  addAction(action: Omit<SchemaAction, "id">) {
    const actionId = uuid("action");
    this.actions.push({ id: actionId, ...action });
    return this;
  }

  getStructure(structureId: string) {
    return this.structures.find((structure) => structure.id === structureId);
  }

  getActions(structureId: string) {
    return this.actions.filter((action) => action.structureId === structureId);
  }

  build(): Schema {
    return {
      structures: this.structures,
      actions: this.actions,
    };
  }
}
