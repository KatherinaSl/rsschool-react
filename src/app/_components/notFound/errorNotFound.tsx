import Link from 'next/link';
import styles from './errorNotFound.module.css';

export default function ErrorNotFound() {
  return (
    <div className={styles['error-container']}>
      <div className={styles['error-message']}>404 Not Found</div>
      <Link href="/">
        <button>Main page</button>
      </Link>
    </div>
  );
}
