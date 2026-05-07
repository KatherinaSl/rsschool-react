import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchComponent from '../components/search/searchComponent';
import type { ReactNode } from 'react';

function setup(jsx: ReactNode) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

const mockResponse = {
  astronomicalObjects: [
    { uid: '123', name: 'testObj', astronomicalObjectType: 'Earth' },
    { uid: '456', name: 'testObj2', astronomicalObjectType: 'Nebula' },
  ],
};

test('should render search component ', async () => {
  if (!globalThis.fetch) {
    globalThis.fetch = jest.fn();
  }

  jest.spyOn(globalThis, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => mockResponse,
  } as Response);

  const { user } = setup(<SearchComponent searchUrl="searchApi" />);
  const searchButton = screen.getByRole('button', { name: 'Search' });
  const searchInput = screen.getByPlaceholderText('Search...');

  await user.click(searchButton);

  expect(await screen.findByText('testObj')).toBeInTheDocument();
  expect(screen.getByText('testObj2')).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});
