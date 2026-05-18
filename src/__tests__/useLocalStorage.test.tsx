import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '../components/hooks/useLocalStorage';

const KEY = 'testKey';

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

it('should return initial value when localStorage is empty', () => {
  const { result } = renderHook(() => useLocalStorage(KEY, 'initial'));

  const [value] = result.current;

  expect(value).toBe('initial');
});

it('should return value from localStorage if exists', () => {
  localStorage.setItem(KEY, 'storedValue');

  const { result } = renderHook(() => useLocalStorage(KEY, 'initial'));
  const [value] = result.current;

  expect(value).toBe('storedValue');
});

it('should update state and localStorage on setItem', () => {
  const { result } = renderHook(() => useLocalStorage(KEY, 'initial'));

  const [, setItem] = result.current;

  act(() => {
    setItem('newValue');
  });

  const [valueAfter] = result.current;

  expect(valueAfter).toBe('newValue');
  expect(localStorage.getItem(KEY)).toBe('newValue');
});
