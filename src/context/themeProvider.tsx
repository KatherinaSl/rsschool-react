'use client';

import { useState, type ReactNode } from 'react';
import { ThemeContext } from './theme';
// import './themeToggler.css';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`search-component ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
