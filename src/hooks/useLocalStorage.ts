'use client';

import { useState } from 'react';

export default function useLocalStorage(
  key: string,
  initialValue = ''
): [
  value: string,
  setItem: (newValue: string) => void,
  removeItem: () => void,
] {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    return localStorage.getItem(key) || initialValue;
  });

  const setItem = (newValue: string) => {
    setValue(newValue);

    localStorage.setItem(key, newValue);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setItem, removeItem];
}
