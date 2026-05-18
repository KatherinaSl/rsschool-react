import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardComponent from '../components/card/cardComponent';
import { MemoryRouter, Route, Routes } from 'react-router';
import userEvent from '@testing-library/user-event';
import CardDetails from '../components/CardDetails/cardDetailsComponent';

const mockData = {
  uid: '123',
  name: 'testObj',
  astronomicalObjectType: 'Earth',
  location: {
    name: 'testLocation',
    uid: '1234',
  },
};

const mockCardDetailsData = {
  name: 'info',
  uid: '789',
  astronomicalObjectType: 'nebula',
  location: {
    astronomicalObjectType: 'Planet',
    location: { uid: '1546', name: 'Solar System' },
  },
};

beforeEach(() => {
  globalThis.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => mockCardDetailsData,
  } as Response);
});

afterEach(() => {
  jest.clearAllMocks();
});

function setup() {
  return {
    user: userEvent.setup(),
    ...render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<CardComponent {...mockData} />} />

          <Route path="/cardDetails/123" element={<CardDetails />} />
        </Routes>
      </MemoryRouter>
    ),
  };
}

test('should render valid card on default page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <CardComponent {...mockData} />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: 'testObj' })).toBeInTheDocument();
});

test('should render card details with additional info by clicking on card', async () => {
  const { user } = setup();
  const link = screen.getByRole('link');

  await user.click(link);

  expect(
    await screen.findByText(/information about astronomical object/i)
  ).toBeInTheDocument();
});
