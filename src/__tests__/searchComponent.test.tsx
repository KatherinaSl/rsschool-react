import '@testing-library/jest-dom';
import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchComponent from '../components/search/searchComponent';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import renderWithProviders from '../test-utils/test-utils';
import { ThemeProvider } from '../context/themeProvider';

function createFetchResponse(body: unknown, ok = true, status = 200) {
  const responseBody = JSON.stringify(body);
  return {
    ok,
    status,
    json: async () => body,
    text: async () => responseBody,
    clone() {
      return this;
    },
  } as unknown as Response;
}


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
  jest.clearAllMocks();
  localStorage.clear();
});

test('should render search term data and save it in locale storage ', async () => {
  globalThis.fetch = jest.fn().mockResolvedValue(
    createFetchResponse(mockResponse)
  );

  const { user } = setup(<SearchComponent />);
  const searchButton = screen.getByRole('button', { name: 'Search' });
  const searchInput = screen.getByPlaceholderText('Search...');

  await user.type(searchInput, 'Test');
  await user.click(searchButton);

  expect(localStorage.getItem('searchTerm')).toBe('Test');
  expect(await screen.findByText('testObj')).toBeInTheDocument();
  expect(await screen.findByText('testObj2')).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});

test('should render a spinner while search is loading', async () => {
  let resolveFetch: ((value: unknown) => void) | null = null;

  globalThis.fetch = jest.fn().mockImplementation(
    () =>
      new Promise((resolve) => {
        resolveFetch = resolve;
      })
  );

  setup(<SearchComponent />);

  expect(await screen.findByTestId('spinner')).toBeInTheDocument();

  act(() => {
    resolveFetch?.(
      createFetchResponse(mockResponse)
    );
  });

  await waitFor(() => expect(screen.getByText('testObj')).toBeInTheDocument());
});

test('should handle server error', async () => {
  globalThis.fetch = jest.fn().mockResolvedValue(
    createFetchResponse({ error: 'Request failed' }, false, 500)
  );
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  await act(async () => {
    renderWithProviders(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/cardDetails/123']}>
          <SearchComponent />
        </MemoryRouter>
      </ThemeProvider>
    );
  });

  expect(await screen.findByRole('alert')).toHaveTextContent(
    /something went wrong/i
  );
  consoleSpy.mockRestore();
});
