import { create } from 'zustand';
import { StoreState } from './types';
import { createSchemaSlice } from './createSchema';
import { createCodeSlice } from './createCode';

const useDsv = create<StoreState>()((...a) => {
  return {
    ...createSchemaSlice(...a),
    ...createCodeSlice(...a),
  };
});

export { useDsv };
