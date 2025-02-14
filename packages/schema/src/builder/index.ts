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

  addAction(action: SchemaAction) {
    this.actions.push(action);
    return this;
  }

  build(): Schema {
    return {
      structures: this.structures,
      actions: this.actions,
    };
  }

  getStructure(structureId: string) {
    return this.structures.find((structure) => structure.id === structureId);
  }

  getActions(structureId: string) {
    return this.actions.filter((action) => action.structureId === structureId);
  }
}
