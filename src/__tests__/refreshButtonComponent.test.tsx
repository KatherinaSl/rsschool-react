import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockDispatch = jest.fn();
const mockSearchMutation = jest.fn();
const mockInvalidateTags = jest.fn(() => ({ type: 'INVALIDATE_TAGS' }));

jest.mock('react-redux', () => ({ useDispatch: () => mockDispatch }));
jest.mock('../store/apiSlice', () => ({
  astronomicalObjApi: {
    util: {
      invalidateTags: mockInvalidateTags,
    },
  },
  useSearchAstronomicalObjMutation: () => [mockSearchMutation],
}));

import RefreshButtonComponent from '../components/refreshButton/refreshButton';

test('should invalidate cache and call api', async () => {
  const user = userEvent.setup();
  render(<RefreshButtonComponent title="Test" pageNumber={2} />);

  await user.click(screen.getByRole('button', { name: /refresh/i }));

  expect(mockInvalidateTags).toHaveBeenCalledWith([
    { type: 'AstronomicalObject' },
  ]);
  expect(mockDispatch).toHaveBeenCalledWith({ type: 'INVALIDATE_TAGS' });
  expect(mockSearchMutation).toHaveBeenCalledWith({
    title: 'Test',
    pageNumber: 2,
  });
});
