'use client';

// import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { removeAll } from '@/lib/features/cards/cardsSlice';
import {
  amountOfCards,
  selectedCards,
} from '@/lib/features/cards/cardsSelectors';
import exportToCsv from '@/utils/convertToCSV';
import styles from './flyoutComponent.module.css';
// import exportToCsv from '../../utils/convertToCSV';
// import { selectedCards } from '@/src/lib/features/cards/cardsSelectors';

export default function FlyoutComponent() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectedCards);
  const numberOfCards = useAppSelector(amountOfCards);
  const handleOnClick = () => dispatch(removeAll());
  const handleOnClickDownload = (): void => {
    const title = `${cards.length}_items.csv`;
    exportToCsv(title, cards);
  };

  return (
    <>
      {numberOfCards > 0 && (
        <div className={styles['flyout-component']}>
          <p>{`${numberOfCards} cards are selected`}</p>
          <button className={styles['unselect-button']} onClick={handleOnClick}>
            Unselect All
          </button>

          <button
            className={styles['download-button']}
            value="download"
            onClick={handleOnClickDownload}
          >
            Download
          </button>
        </div>
      )}
    </>
  );
}
