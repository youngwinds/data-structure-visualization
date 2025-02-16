import { Schema } from 'schema';

export interface SchemaSlice {
  schema: Schema;
  setSchema: (schema: Schema) => void;
}

export interface CodeSlice {
  code: string;
  setCode: (code: string) => void;
}

export type StoreState = SchemaSlice & CodeSlice;
