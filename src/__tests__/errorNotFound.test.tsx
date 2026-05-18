import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorNotFound from '../components/errorBoundary/errorNotFound';
import { MemoryRouter } from 'react-router';

it('should render the ErrorNotFound component', () => {
  render(
    <MemoryRouter>
      <ErrorNotFound />
    </MemoryRouter>
  );
  expect(screen.getByText(/404/)).toBeInTheDocument();
});
