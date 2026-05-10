import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
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

test('should render search term data and save it in locale storage ', async () => {
  if (!globalThis.fetch) {
    globalThis.fetch = jest.fn();
  }

  jest.spyOn(globalThis, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => mockResponse,
  } as Response);

  const mockSearchTerm = jest.spyOn(Storage.prototype, 'setItem');
  mockSearchTerm.mockImplementation(() => {});

  const { user } = setup(<SearchComponent searchUrl="searchApi" />);
  const searchButton = screen.getByRole('button', { name: 'Search' });
  const searchInput = screen.getByPlaceholderText('Search...');

  await user.type(screen.getByRole('textbox'), 'Test');
  await user.click(searchButton);

  expect(mockSearchTerm).toHaveBeenCalledWith('searchTerm', 'Test');
  expect(await screen.findByText('testObj')).toBeInTheDocument();
  expect(await screen.findByText('testObj2')).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();

  mockSearchTerm.mockRestore();
});

test('should handle server error', async () => {
  jest.spyOn(globalThis, 'fetch').mockResolvedValue({
    ok: false,
    json: async () => mockResponse,
  } as Response);
  const consoleSpy = jest.spyOn(console, 'error');

  await act(async () => {
    render(<SearchComponent searchUrl="url" />);
  });
  expect(consoleSpy).toHaveBeenCalled();

  consoleSpy.mockRestore();
});
