'use client';

import { ThemeContext } from '@/context/theme';
import { useContext } from 'react';
import styles from './themeToggler.module.css';

export default function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={styles.button} onClick={toggleTheme}>
      {theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
