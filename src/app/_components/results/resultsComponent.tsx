// import { useSelector } from 'react-redux';
import CardComponent from '../card/cardComponent';
// import FlyoutComponent from '../flyout/flyoutComponent';
// import { Outlet } from 'react-router';
import type { ApiResponse } from '../../../interfaces/interfaces';
import styles from './resultsComponent.module.css';
// import { amountOfCards } from '@/src/lib/features/cards/cardsSelectors';

export default function ResultsComponent({
  data,
}: {
  searchTerm: string;
  data: ApiResponse;
}) {
  // const numberOfCards = useSelector(amountOfCards);
  return (
    <>
      <div className={styles['content-layout']}>
        <div className={styles['result-section']}>
          {data.astronomicalObjects.length > 0 ? (
            data.astronomicalObjects.map((obj, index) => {
              return <CardComponent key={index} {...obj} />;
            })
          ) : (
            <p>No astronomical object found for the given search term.</p>
          )}
        </div>
        {/* <Outlet /> */}
      </div>

      {/* {data.astronomicalObjects.length > 0 && numberOfCards > 0 && (
        <FlyoutComponent amount={numberOfCards} />
      )} */}
    </>
  );
}
