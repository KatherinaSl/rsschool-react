import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardComponent from '../components/card/cardComponent';

const mockData = {
  uid: '123',
  name: 'testObj',
  astronomicalObjectType: 'Earth',
};

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the main page', () => {
  render(
    <CardComponent
      uid={mockData.uid}
      name={mockData.name}
      astronomicalObjectType={mockData.astronomicalObjectType}
    />
  );
  expect(true).toBeTruthy();
});
