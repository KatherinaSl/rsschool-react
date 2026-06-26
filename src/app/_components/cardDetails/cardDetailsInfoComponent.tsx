import { useTranslations } from 'next-intl';
import type { FullAstronomicalObjectInfo } from '../../../interfaces/interfaces';
import styles from './cardDetailsComponent.module.css';

export default function CardDetailsInfo({
  details,
}: {
  details: FullAstronomicalObjectInfo;
}) {
  const t = useTranslations('CardDetails');

  return (
    <div className={styles['card-information']}>
      <p>
        <strong>{t('name')}</strong> {details.name}
      </p>
      <p>
        <strong>{t('type')}</strong>
        {details.astronomicalObjectType}
      </p>
      {details.location ? (
        <>
          <h3>{t('location-title')}</h3>
          <p>
            <strong>{t('location')}</strong>{' '}
            {details.location.astronomicalObjectType}
          </p>
          <p>
            <strong>{t('location-name')}</strong>{' '}
            {details.location.location.name}
          </p>
        </>
      ) : (
        <p>{t('notfound')}</p>
      )}
    </div>
  );
}
