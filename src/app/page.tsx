import Link from 'next/link';
import SearchInputComponent from './_components/searchInput/searchInputComponent';
import { fetchAstronomicalObj } from '../lib/features/api/api-handlers';
import ResultsComponent from '@/app/_components/results/resultsComponent';
import PaginationComponent from '@/app/_components/pagination/paginationComponent';
import ThemeButton from './_components/toggleTheme/toggleThemeComponent';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    searchTerm?: string;
    pageNumber?: string;
  }>;
}) {
  const { pageNumber, searchTerm } = await searchParams;
  const page = Number(pageNumber) || 1;
  const search = searchTerm ?? '';

  const data = await fetchAstronomicalObj(page - 1, search);

  return (
    <>
      <div className="header">
        <h1>Star Track Astronomical Objects Search:</h1>
        <Link href="/about">About</Link>
        <ThemeButton />
      </div>
      <SearchInputComponent />
      {data && (
        <ResultsComponent data={data} pageNumber={page} searchTerm={search} />
      )}
      {data.page.numberOfElements > 0 && (
        <PaginationComponent page={data.page} searchTerm={search} />
      )}
    </>
  );
}
