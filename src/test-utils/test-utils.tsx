import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
  });
};

export default renderWithProviders;
