import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutComponent from '../components/about/aboutComponent';
import { MemoryRouter } from 'react-router';

it('should render the ErrorNotFound component', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <AboutComponent />
    </MemoryRouter>
  );
  expect(screen.getByTestId('about')).toBeInTheDocument();
});
