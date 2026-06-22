'use client';

import { useRouter } from 'next/navigation';
import styles from './refreshButton.module.css';

export default function RefreshButtonComponent() {
  const router = useRouter();

  return (
    <button
      className={styles['refresh-button']}
      onClick={() => router.refresh()}
    >
      Refresh
    </button>
  );
}
