import Link from 'next/link';
import SearchInputComponent from './_components/searchInput/searchInputComponent';
import { fetchAstronomicalObj } from '../lib/data/api-handlers';
import ResultsComponent from '@/app/_components/results/resultsComponent';
import PaginationComponent from '@/app/_components/pagination/paginationComponent';
import ThemeButton from './_components/toggleTheme/toggleThemeComponent';

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
      {data && <ResultsComponent searchTerm={''} data={data} />}
      {data.page.numberOfElements > 0 && (
        <PaginationComponent page={data.page} />
      )}
    </>
  );
}
