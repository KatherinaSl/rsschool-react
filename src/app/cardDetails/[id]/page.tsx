import CardDetails from '@/app/_components/cardDetails/cardDetailsComponent';
import {
  fetchAstronomicalObj,
  fetchAstronomicalObjDetails,
} from '@/lib/features/api/api-handlers';
import Link from 'next/link';
import ThemeButton from '@/app/_components/toggleTheme/toggleThemeComponent';
import SearchInputComponent from '@/app/_components/searchInput/searchInputComponent';
import ResultsComponent from '@/app/_components/results/resultsComponent';
import PaginationComponent from '@/app/_components/pagination/paginationComponent';
import RefreshButtonComponent from '@/app/_components/refreshButton/refreshButton';

export default async function Page({
  searchParams,
  params,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    searchTerm?: string;
    pageNumber?: string;
  }>;
}) {
  const { id } = await params;

  const { pageNumber, searchTerm } = await searchParams;
  const page = Number(pageNumber) || 1;
  const search = searchTerm ?? '';
  const response = await fetchAstronomicalObjDetails(id);
  const cardDetailsData = response.astronomicalObject;

  const data = await fetchAstronomicalObj(page - 1, search);

  return (
    <>
      <div className="header">
        <h1>Star Track Astronomical Objects Search:</h1>
        <Link href="/about">About</Link>
        <ThemeButton />
      </div>
      <SearchInputComponent />
      <RefreshButtonComponent />
      <div className="content-layout">
        {data && (
          <ResultsComponent data={data} pageNumber={page} searchTerm={search} />
        )}
        {cardDetailsData && (
          <CardDetails
            data={cardDetailsData}
            pageNumber={page}
            searchTerm={search}
          />
        )}
      </div>
      {data.page.numberOfElements > 0 && (
        <PaginationComponent page={data.page} searchTerm={search} />
      )}
    </>
  );
}
