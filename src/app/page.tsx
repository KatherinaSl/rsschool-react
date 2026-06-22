import Link from 'next/link';
import SearchInputComponent from './_components/searchInput/searchInputComponent';
import { fetchAstronomicalObj } from '../lib/features/api/api-handlers';
import ResultsComponent from '@/app/_components/results/resultsComponent';
import PaginationComponent from '@/app/_components/pagination/paginationComponent';
import ThemeButton from './_components/toggleTheme/toggleThemeComponent';
import '@/styles/global.css';
import { Suspense } from 'react';
import SpinnerComponent from './_components/spinner/spinnerComponent';

export default async function Page(props: {
  searchParams?: Promise<{
    pageNumber?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const pageNumber = Number(searchParams?.pageNumber) - 1 || 0;

  const data = await fetchAstronomicalObj(pageNumber);

  return (
    <>
      <div className="header">
        <h1>Star Track Astronomical Objects Search:</h1>
        <Link href="/about">About</Link>
        <ThemeButton />
      </div>
      <SearchInputComponent />
      <Suspense fallback={<SpinnerComponent />}>
        {data && (
          <ResultsComponent
            searchTerm={''}
            data={data}
            pageNumber={pageNumber}
          />
        )}
        {data.page.numberOfElements > 0 && (
          <PaginationComponent page={data.page} />
        )}
      </Suspense>
    </>
  );
}
