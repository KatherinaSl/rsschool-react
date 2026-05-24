import { createSlice, type PayloadAction } from '@reduxjs/toolkit/react';
import type { AstronomicalObject } from '../interfaces/interfaces';
import type { RootState } from './store';

export const cardsSlice = createSlice({
  name: 'cardSelected',
  initialState: new Array<AstronomicalObject>(),
  reducers: {
    save: (state, action: PayloadAction<AstronomicalObject>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<AstronomicalObject>) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

export const { save, remove } = cardsSlice.actions;
export const cardsSelector = (state: RootState) => state.cardSelected.length;

export const isSelected = (state: RootState, cardId: string) =>
  !!state.cardSelected.find((card) => card.uid === cardId);

export default cardsSlice.reducer;
