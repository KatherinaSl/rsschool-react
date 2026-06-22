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
import { Suspense } from 'react';
import SpinnerComponent from '@/app/_components/spinner/spinnerComponent';

export default async function Page({
  searchParams,
  params,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    pageNumber?: string;
  }>;
}) {
  const { id } = await params;
  const { pageNumber } = await searchParams;
  const page = pageNumber ? Number(pageNumber) : 1;

  const response = await fetchAstronomicalObjDetails(id);
  const cardDetailsData = response.astronomicalObject;
  const data = await fetchAstronomicalObj(page - 1);

  return (
    <>
      <div className="header">
        <h1>Star Track Astronomical Objects Search:</h1>
        <Link href="/about">About</Link>
        <ThemeButton />
      </div>
      <SearchInputComponent />

      <div className="content-layout">
        <Suspense fallback={<SpinnerComponent />}></Suspense>
        {data && (
          <ResultsComponent searchTerm={''} data={data} pageNumber={page} />
        )}
        {cardDetailsData && (
          <CardDetails data={cardDetailsData} pageNumber={page} />
        )}
      </div>
      {data.page.numberOfElements > 0 && (
        <PaginationComponent page={data.page} />
      )}
    </>
  );
}
