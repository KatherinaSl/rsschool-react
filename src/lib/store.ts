import { configureStore } from '@reduxjs/toolkit';
import cardSelectedReducer from './features/cards/cardsSlice';

export const store = () =>
  configureStore({
    reducer: {
      cardSelected: cardSelectedReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
