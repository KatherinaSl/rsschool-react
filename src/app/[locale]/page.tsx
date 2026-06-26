import SearchInputComponent from '../_components/searchInput/searchInputComponent';
import { fetchAstronomicalObj } from '../../lib/features/api/api-handlers';
import ResultsComponent from '@/app/_components/results/resultsComponent';
import PaginationComponent from '@/app/_components/pagination/paginationComponent';
import ThemeButton from '../_components/toggleTheme/toggleThemeComponent';
import RefreshButtonComponent from '../_components/refreshButton/refreshButton';
import { getTranslations } from 'next-intl/server';
import LocaleSwitcher from '../_components/localeSwitcher/localeSwitcher';
import { Link } from '@/i18n/navigation';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    searchTerm?: string;
    pageNumber?: string;
  }>;
}) {
  const t = await getTranslations('HomePage');
  const { pageNumber, searchTerm } = await searchParams;
  const page = Number(pageNumber) || 1;
  const search = searchTerm ?? '';

  const data = await fetchAstronomicalObj(page - 1, search);

  return (
    <>
      <div className="header">
        <h1>{t('title')}</h1>
        <Link href="/about">{t('about')}</Link>
        <LocaleSwitcher />
        <ThemeButton />
      </div>
      <SearchInputComponent />
      <RefreshButtonComponent />

      {data && (
        <ResultsComponent data={data} pageNumber={page} searchTerm={search} />
      )}
      {data.page.numberOfElements > 0 && (
        <PaginationComponent page={data.page} searchTerm={search} />
      )}
    </>
  );
}
