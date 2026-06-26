import { Link } from '@/i18n/navigation';
import styles from './aboutComponent.module.css';
import { useTranslations } from 'next-intl';

export default function AboutComponent() {
  const t = useTranslations('AboutPage');
  return (
    <div className={styles.about}>
      <h3>
        {t('desc')}&nbsp;
        <Link href="https://github.com/KatherinaSl">{t('link')}</Link>.
      </h3>
      <p>
        {t('app-desc')}&nbsp;
        <Link href="https://rs.school/courses/reactjs">{t('rss-link')}</Link>
      </p>
    </div>
  );
}
