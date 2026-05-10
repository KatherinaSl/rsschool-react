import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardComponent from '../components/card/cardComponent';

const mockData = {
  uid: '123',
  name: 'testObj',
  astronomicalObjectType: 'Earth',
  location: {
    name: 'testLocation',
    uid: '1234',
  },
};

test('should render valid card on default page', () => {
  render(
    <CardComponent {...mockData}    />
  );

  expect(screen.getByRole('heading', { name: 'testObj' })).toBeInTheDocument();
});
