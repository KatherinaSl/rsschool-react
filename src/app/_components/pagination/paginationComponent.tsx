import styles from './paginationComponent.module.css';
import type { Page } from '../../../interfaces/interfaces';
import { Link } from '@/i18n/navigation';

export default function PaginationComponent({
  searchTerm,
  page,
}: {
  searchTerm: string;
  page: Page;
}) {
  return (
    <div className={styles.pagination}>
      <Link
        href={`?pageNumber=${page.pageNumber}&searchTerm=${searchTerm}`}
        className={styles['pagination-link']}
        aria-disabled={`${page.firstPage}`}
      >
        {'<'}
      </Link>

      <div className={styles['pagination-link']}>{page.pageNumber + 1}</div>

      <Link
        href={`?pageNumber=${page.pageNumber + 2}&searchTerm=${searchTerm}`}
        className={styles['pagination-link']}
        aria-disabled={`${page.lastPage}`}
      >
        {'>'}
      </Link>
    </div>
  );
}
