import { Action, Schema, Structure } from "../types";

export class SchemaBuilder {
  private actionsMap: Record<string, Action[]> = {};
  private structures: Structure[] = [];

  constructor() {}

  init() {
    this.structures = [];
    this.actionsMap = {};
    return this;
  }

  from(schema: Schema) {
    this.structures = [...(schema.structures ?? [])];
    this.actionsMap = { ...(schema.actionsMap ?? {}) };
    return this;
  }

  addStructure(structure: Structure) {
    this.structures.push(structure);
    return this;
  }

  addAction(structureId: string, action: Action) {
    this.actionsMap[structureId] = [
      ...(this.actionsMap[structureId] || []),
      action,
    ];
    return this;
  }

  build(): Schema {
    return {
      structures: this.structures,
      actionsMap: this.actionsMap,
    };
  }

  getStructure(structureId: string) {
    return this.structures.find((structure) => structure.id === structureId);
  }

  getActions(structureId: string) {
    return this.actionsMap[structureId];
  }
}
