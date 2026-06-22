import { Link } from '@/i18n/navigation';
import { FullAstronomicalObjectInfo } from '@/interfaces/interfaces';
import CardDetailsInfo from './cardDetailsInfoComponent';
import styles from './cardDetailsComponent.module.css';
import { useTranslations } from 'next-intl';

export default function CardDetails({
  searchTerm,
  data,
  pageNumber,
}: {
  searchTerm: string;
  data: FullAstronomicalObjectInfo;
  pageNumber: number;
}) {
  const t = useTranslations('CardDetails');
  return (
    <div className={styles['sidebar-wrapper']}>
      <div className={styles.sidebar}>
        <Link
          href={`/?pageNumber=${pageNumber}&searchTerm=${searchTerm}`}
          className={styles['hide-button']}
        >
          {t('link')}
        </Link>

        <h2 className={styles.title}>
          {t('title')} {data?.name}
        </h2>

        {data && <CardDetailsInfo details={data} />}
      </div>
    </div>
  );
}
