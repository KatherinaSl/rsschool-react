'use client';

import { ThemeContext } from '@/context/theme';
import { useContext } from 'react';

export default function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
