import CardComponent from '../card/cardComponent';
import type { ApiResponse } from '../../../interfaces/interfaces';
import styles from './resultsComponent.module.css';
import FlyoutComponent from '@/app/_components/flyout/flyoutComponent';
import { useTranslations } from 'next-intl';

export default function ResultsComponent({
  searchTerm,
  pageNumber,
  data,
}: {
  searchTerm: string;
  pageNumber: number;
  data: ApiResponse;
}) {
  const t = useTranslations('ResultsComp');

  return (
    <>
      <div className={styles['content-layout']}>
        <div className={styles['result-section']}>
          {data.astronomicalObjects.length > 0 ? (
            data.astronomicalObjects.map((obj, index) => {
              return (
                <CardComponent
                  card={obj}
                  key={index}
                  pageNumber={pageNumber}
                  searchTerm={searchTerm}
                />
              );
            })
          ) : (
            <p>{t('notfound')}</p>
          )}
        </div>
      </div>

      {data.astronomicalObjects.length > 0 && <FlyoutComponent />}
    </>
  );
}
