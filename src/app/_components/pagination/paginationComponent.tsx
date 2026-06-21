import styles from './paginationComponent.module.css';
import { type ReactNode } from 'react';
import type { Page } from '../../../interfaces/interfaces';
import Link from 'next/link';

export default function PaginationComponent({
  page,
}: {
  page: Page;
}): ReactNode {
  return (
    <div className={styles.pagination}>
      <Link
        href={`?pageNumber=${page.pageNumber}`}
        className={styles['pagination-link']}
        aria-disabled={`${page.firstPage}`}
      >
        {'<'}
      </Link>

      <div className={styles['pagination-link']}>{page.pageNumber + 1}</div>

      <Link
        href={`?pageNumber=${page.pageNumber + 2}`}
        className={styles['pagination-link']}
        aria-disabled={`${page.lastPage}`}
      >
        {'>'}
      </Link>
    </div>
  );
}
