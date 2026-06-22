import CardComponent from '../card/cardComponent';
import type { ApiResponse } from '../../../interfaces/interfaces';
import styles from './resultsComponent.module.css';
import FlyoutComponent from '@/app/_components/flyout/flyoutComponent';

export default function ResultsComponent({
  searchTerm,
  pageNumber,
  data,
}: {
  searchTerm: string,
  pageNumber: number;
  data: ApiResponse;
}) {
  return (
    <>
      <div className={styles['content-layout']}>
        <div className={styles['result-section']}>
          {data.astronomicalObjects.length > 0 ? (
            data.astronomicalObjects.map((obj, index) => {
              return (
                <CardComponent card={obj} key={index} pageNumber={pageNumber} searchTerm={searchTerm} />
              );
            })
          ) : (
            <p>No astronomical object found for the given search term.</p>
          )}
        </div>
      </div>

      {data.astronomicalObjects.length > 0 && <FlyoutComponent />}
    </>
  );
}
