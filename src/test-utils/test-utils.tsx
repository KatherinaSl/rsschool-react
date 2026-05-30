import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cardSelectedReducer from '../store/slice';
import { astronomicalObjApi } from '../store/apiSlice';

const renderWithProviders = (ui: React.ReactElement) => {
  const store = configureStore({
    reducer: {
      cardSelected: cardSelectedReducer,
      [astronomicalObjApi.reducerPath]: astronomicalObjApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(astronomicalObjApi.middleware),
  });

  return render(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
  });
};

export default renderWithProviders;
