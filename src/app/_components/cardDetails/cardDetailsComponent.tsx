import Link from 'next/link';
import { FullAstronomicalObjectInfo } from '@/interfaces/interfaces';
import CardDetailsInfo from './cardDetailsInfoComponent';
import styles from './cardDetailsComponent.module.css';

export default function CardDetails({
  searchTerm,
  data,
  pageNumber,
}: {
  searchTerm: string;
  data: FullAstronomicalObjectInfo;
  pageNumber: number;
}) {
  return (
    <div className={styles['sidebar-wrapper']}>
      <div className={styles.sidebar}>
        <Link
          href={`/?pageNumber=${pageNumber}&searchTerm=${searchTerm}`}
          className={styles['hide-button']}
        >
          Hide details
        </Link>

        <h2 className={styles.title}>
          Information about astronomical object {data?.name} and its location
        </h2>

        {data && <CardDetailsInfo details={data} />}
      </div>
    </div>
  );
}
