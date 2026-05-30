import { configureStore } from '@reduxjs/toolkit';
import cardSelectedReducer from './slice';
import { astronomicalObjApi } from './apiSlice';

export const store = configureStore({
  reducer: {
    cardSelected: cardSelectedReducer,
    [astronomicalObjApi.reducerPath]: astronomicalObjApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(astronomicalObjApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
