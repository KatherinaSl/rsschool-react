import { configureStore } from '@reduxjs/toolkit';
import cardSelectedReducer from './slice';

export const store = configureStore({
  reducer: {
    cardSelected: cardSelectedReducer,
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
