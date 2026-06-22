'use client';

import styles from './searchInputComponent.module.css';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { redirect } from 'next/navigation';

export default function SearchInputComponent() {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm');
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const title = searchTerm.trim();
    setSearchTerm(title);
    redirect('/');
  };

  return (
    <div>
      <input
        name="search"
        type="text"
        placeholder="Search..."
        className={styles.input}
        value={searchTerm}
        onChange={handleOnChange}
      />
      <button className={styles.button} type="submit" onClick={handleOnClick}>
        Search
      </button>
    </div>
  );
}
