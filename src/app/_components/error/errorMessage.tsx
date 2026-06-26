import { Link } from '@/i18n/navigation';
import styles from './errorMessage.module.css';
import { useTranslations } from 'next-intl';

export default function ErrorMessage({ error }: { error: Error }) {
  const t = useTranslations('Error');

  return (
    <html>
      <body>
        <div role="alert" className={styles.error}>
          <h3>{t('title')}</h3>
          <h4>{t('desc')}</h4>
          <p>{error.message}</p>

          <Link href="/" className={styles['reset-button']}>
            {t('button')}
          </Link>
        </div>
      </body>
    </html>
  );
}
