import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spinner from '../components/spinner/spinnerComponent';

test('should render the Spinner component', () => {
  render(<Spinner />);
  expect(screen.getByTestId('spinner')).toBeInTheDocument();
});
