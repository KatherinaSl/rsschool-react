import { Link } from '@/i18n/navigation';
import styles from './errorNotFound.module.css';
import { getTranslations } from 'next-intl/server';

export default async function ErrorNotFound() {
  const t = await getTranslations('NotFoundPage');

  return (
    <div className={styles['error-container']}>
      <div className={styles['error-message']}>{t('notfound')}</div>
      <Link href="/">
        <button>{t('button')}</button>
      </Link>
    </div>
  );
}
