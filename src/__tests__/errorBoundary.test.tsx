import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/errorBoundary/errorBoundary';

test('should render error boundary error', () => {
  const ThrowError = () => {
    throw new Error('Test');
  };
  render(
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
  );

  expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
});
