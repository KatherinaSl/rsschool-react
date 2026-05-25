import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderWithProviders from '../test-utils/test-utils';
import FlyoutComponent from '../components/flyout/flyoutComponent';
import { MemoryRouter } from 'react-router';

test('should render Flyout component with correct count', () => {
  renderWithProviders(
    <MemoryRouter>
      <FlyoutComponent amount={3} />
    </MemoryRouter>
  );
  expect(screen.getByText('3 cards are selected')).toBeVisible();
});
