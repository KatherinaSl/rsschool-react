import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import CardDetails from '../components/CardDetails/cardDetailsComponent';
import renderWithProviders from '../test-utils/test-utils';

const mockCardDetailsData = {
  uid: '123',
  name: 'testObj',
  astronomicalObjectType: 'planet',
  location: {
    astronomicalObjectType: 'planet',
    location: { uid: '1546', name: 'Solar System' },
  },
};

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


beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

function setup() {
  return renderWithProviders(
    <MemoryRouter initialEntries={['/cardDetails/123']}>
      <Routes>
        <Route path="/cardDetails/:cardId" element={<CardDetails />} />
      </Routes>
    </MemoryRouter>
  );
}

test('should render card details information when the API returns data', async () => {
  globalThis.fetch = jest.fn().mockResolvedValue(
    createFetchResponse({ astronomicalObject: mockCardDetailsData })
  );

  setup();

  expect(
    await screen.findByRole('heading', {
      name: /information about astronomical object testobj and its location/i,
    })
  ).toBeInTheDocument();
});

test('should render an error message when the API request fails', async () => {
  globalThis.fetch = jest.fn().mockResolvedValue(
    createFetchResponse({ error: 'Request failed' }, false, 500)
  );

  setup();

  expect(await screen.findByRole('alert')).toHaveTextContent(
    /something went wrong/i
  );
});

test('should render a spinner while loading card details', async () => {
  let resolveFetch: (value: unknown) => void = () => {};

  globalThis.fetch = jest.fn().mockImplementation(
    () =>
      new Promise((resolve) => {
        resolveFetch = resolve;
      })
  ) as unknown as typeof fetch;

  setup();

  expect(await screen.findByTestId('spinner')).toBeInTheDocument();

  resolveFetch(
    createFetchResponse({ astronomicalObject: mockCardDetailsData })
  );

  expect(
    await screen.findByRole('heading', {
      name: /information about astronomical object testobj/i,
    })
  ).toBeInTheDocument();
});
