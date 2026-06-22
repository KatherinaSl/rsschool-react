'use client';

import { useRouter } from 'next/navigation';
import styles from './refreshButton.module.css';
import { useTranslations } from 'next-intl';

export default function RefreshButtonComponent() {
  const t = useTranslations('RefreshButton');

  const router = useRouter();

  return (
    <button
      className={styles['refresh-button']}
      onClick={() => router.refresh()}
    >
      {t('button')}
    </button>
  );
}
