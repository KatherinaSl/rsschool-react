import './paginationComponent.css';
import { type ReactNode } from 'react';
import { Link } from 'react-router';
import type { Page } from '../../interfaces/interfaces';

export default function PaginationComponent({
  page,
  onClick,
}: {
  page: Page;
  onClick: (pageNumber: number) => void;
}): ReactNode {
  return (
    <div className="pagination">
      <Link
        to={`?pageNumber=${page.pageNumber}`}
        className="pagination-link"
        aria-disabled={`${page.firstPage}`}
        onClick={() => onClick(page.pageNumber - 1)}
      >
        {'<'}
      </Link>

      <div className="pagination-page pagination-link">
        {page.pageNumber + 1}
      </div>

      <Link
        to={`?pageNumber=${page.pageNumber + 2}`}
        className="pagination-link"
        aria-disabled={`${page.lastPage}`}
        onClick={() => onClick(page.pageNumber + 1)}
      >
        {'>'}
      </Link>
    </div>
  );
}
