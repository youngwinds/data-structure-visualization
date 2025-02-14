/**
 * @description One Schema represents one algorithm visualization, which contains one or more data structures
 */
export interface Schema {
  /**
   * @description The data structures in the schema
   */
  structures: Structure[];
  /**
   * @description The actions in the schema
   */
  actions: SchemaAction[];
}

export interface Structure {
  id: string;
  type: StructureType;
  array: any[];
}

export enum StructureType {
  Array = "array",
}

export interface SchemaAction {
  structureId: string;
  name: string;
  type: string;
  args: any[];
}
