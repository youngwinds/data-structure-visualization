/**
 * @description One Schema represents one algorithm visualization, which contains one or more data structures
 */
export interface Schema {
  /**
   * @description The data structures in the schema
   */
  structures: Structure[];
  /**
   * @description The actions map in the schema
   */
  actionsMap: ActionsMap;
}

export interface Structure {
  id: string;
  type: StructureType;
}

export enum StructureType {
  Array = "array",
}

export interface ActionsMap {
  [structureId: string]: Action[];
}

export interface Action {
  name: string;
  type: string;
  args: any[];
}
