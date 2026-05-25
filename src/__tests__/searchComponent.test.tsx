import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchComponent from '../components/search/searchComponent';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import renderWithProviders from '../test-utils/test-utils';
import { ThemeProvider } from '../context/themeProvider';

function setup(jsx: ReactNode) {
  return {
    user: userEvent.setup(),
    ...renderWithProviders(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/cardDetails/123']}>{jsx}</MemoryRouter>
      </ThemeProvider>
    ),
  };
}

const mockResponse = {
  astronomicalObjects: [
    { uid: '123', name: 'testObj', astronomicalObjectType: 'Earth' },
    { uid: '456', name: 'testObj2', astronomicalObjectType: 'Nebula' },
  ],
  page: {
    numberOfElements: 2,
    totalElements: 2,
    totalPages: 1,
    pageNumber: 0,
    pageSize: 6,
    firstPage: true,
    lastPage: true,
  },
};

beforeEach(() => {
  localStorage.clear();
});

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
});

test('should handle server error', async () => {
  jest.spyOn(globalThis, 'fetch').mockResolvedValue({
    ok: false,
    json: async () => mockResponse,
  } as Response);
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  await act(async () => {
    renderWithProviders(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/cardDetails/123']}>
          <SearchComponent searchUrl="url" />
        </MemoryRouter>
      </ThemeProvider>
    );
  });

  expect(await screen.findByText(/server error/i)).toBeInTheDocument();
  consoleSpy.mockRestore();
});
