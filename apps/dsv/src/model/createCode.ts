import { StateCreator } from 'zustand';
import { CodeSlice, StoreState } from './types';

export const createCodeSlice: StateCreator<StoreState, [], [], CodeSlice> = (
  set,
) => ({
  code: '',
  setCode: (code) => set({ code }),
});
