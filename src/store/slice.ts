import { createSlice } from '@reduxjs/toolkit/react';
import type { FormInputInterface } from '../interfaces/interface';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export const formSlice = createSlice({
  name: 'form',
  initialState: new Array<FormInputInterface>(),
  reducers: {
    save: (state, action: PayloadAction<FormInputInterface>) => {
      state.push(action.payload);
    },
  },
});

export const { save } = formSlice.actions;
export const savedForm = (state: RootState) => state.form;

export default formSlice.reducer;
