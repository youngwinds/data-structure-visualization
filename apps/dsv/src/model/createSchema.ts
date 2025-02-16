import { StateCreator } from 'zustand';
import { SchemaSlice, StoreState } from './types';

export const createSchemaSlice: StateCreator<
  StoreState,
  [],
  [],
  SchemaSlice
> = (set) => ({
  schema: {
    structures: [],
    actions: [],
  },
  setSchema: (schema) => set({ schema }),
});
