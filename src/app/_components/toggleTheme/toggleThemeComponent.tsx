'use client';

import { ThemeContext } from '@/context/theme';
import { useContext } from 'react';
import styles from './themeToggler.module.css';
import { useTranslations } from 'next-intl';

export default function ThemeToggler() {
  const t = useTranslations('ThemeSwitcher');

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={styles.button} onClick={toggleTheme}>
      {t(theme)}
    </button>
  );
}
