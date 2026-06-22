'use client';

import { useTranslations } from 'next-intl';
import styles from './searchInputComponent.module.css';
import { redirect, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SearchInputComponent() {
  const t = useTranslations('SearchComp');

  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get('searchTerm') ?? ''
  );
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const title = searchTerm.trim();
    setSearchTerm(title);
    redirect(`/?searchTerm=${title}`);
  };

  return (
    <div>
      <input
        name="search"
        type="text"
        placeholder={t('placeholder')}
        className={styles.input}
        value={searchTerm}
        onChange={handleOnChange}
      />
      <button className={styles.button} type="submit" onClick={handleOnClick}>
        {t('button')}
      </button>
    </div>
  );
}
