import { useContext } from 'react';
import './themeToggler.css';
import { ThemeContext } from '../../context/theme';

export default function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      {theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
