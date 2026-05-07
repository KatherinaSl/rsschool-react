import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardComponent from '../components/card/cardComponent';

const mockData = {
  uid: '123',
  name: 'testObj',
  astronomicalObjectType: 'Earth',
};


test('should render valid card on default page', () => {
  render(
    <CardComponent
      uid={mockData.uid}
      name={mockData.name}
      astronomicalObjectType={mockData.astronomicalObjectType}
    />
  );

  expect(screen.getByRole('heading', { name: 'testObj' })).toBeInTheDocument();
});