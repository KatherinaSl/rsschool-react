import Link from 'next/link';
// import '../index.css';
import './global.css';
import '../components/search/searchComponent.css';
import SearchComponent from '../components/search/searchComponent';
import { fetchAstronomicalObj } from './features/api-handlers';
import ResultsComponent from '../components/results/resultsComponent';
// import { ClientOnly } from './client';
// import StoreProvider from './StoreProvider';

// export function generateStaticParams() {
//   // return [{ slug: [''] }];
//   return [{ slug: ['card', 'cardId'] }];
// }

// export const dynamic = 'force-dynamic';

export default async function Page(props: {
  searchParams?: Promise<{
    pageNumber?: string;
  }>;
}) {
  // return (
  //   <StoreProvider>
  //     <ClientOnly />
  //   </StoreProvider>
  // );
  // return <div>Hello world</div>;
  const searchParams = await props.searchParams;
  const pageNumber = Number(searchParams?.pageNumber) - 1 || 0;

  const data = await fetchAstronomicalObj(pageNumber);

  return (
    <>
      <div className="header">
        <h1>Star Track Astronomical Objects Search:</h1>
        <Link href="/about">About</Link>
        {/* <button onClick={toggleTheme}>
          {theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button> */}
      </div>
      <SearchComponent />
      {data && <ResultsComponent searchTerm={''} data={data} />}
    </>
  );
}
