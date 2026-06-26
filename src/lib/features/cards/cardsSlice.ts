import { createSlice, type PayloadAction } from '@reduxjs/toolkit/react';
import type { AstronomicalObject } from '../../../interfaces/interfaces';

export const cardsSlice = createSlice({
  name: 'cardSelected',
  initialState: new Array<AstronomicalObject>(),
  reducers: {
    save: (state, action: PayloadAction<AstronomicalObject>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const found = state.find((item) => item.uid === action.payload);
      if (found) {
        const index = state.indexOf(found);
        state.splice(index, 1);
      }
    },
    removeAll: (state) => {
      state.length = 0;
    },
  },
});

export const { save, remove, removeAll } = cardsSlice.actions;

export default cardsSlice.reducer;
