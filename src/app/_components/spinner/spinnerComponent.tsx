import type { ReactNode } from 'react';
import styles from './spinnerComponent.module.css';

export default function SpinnerComponent(): ReactNode {
  return (
    <div className={styles['spinner-container']}>
      <div className={styles.spinner} data-testid="spinner"></div>
    </div>
  );
}
