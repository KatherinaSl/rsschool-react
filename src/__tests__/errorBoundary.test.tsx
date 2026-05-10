import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/errorBoundary/errorBoundary';
import type { ReactNode } from 'react';
import userEvent from '@testing-library/user-event';
import ErrorButton from '../components/errorBoundary/errorButton';

function setup(jsx: ReactNode) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

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

test('should throw error and show fallback UI', async () => {
  const consoleErrorMock = jest
    .spyOn(console, 'error')
    .mockImplementation(() => {});

  const { user } = setup(
    <ErrorBoundary>
      <ErrorButton />
    </ErrorBoundary>
  );

  const button = screen.getByRole('button', { name: 'Throw Error' });
  await user.click(button);

  expect(await screen.findByText(/Something went wrong/i)).toBeInTheDocument();

  consoleErrorMock.mockRestore();
});
