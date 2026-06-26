'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { removeAll } from '@/lib/features/cards/cardsSlice';
import {
  amountOfCards,
  selectedCards,
} from '@/lib/features/cards/cardsSelectors';
import styles from './flyoutComponent.module.css';
import { useTranslations } from 'next-intl';

export default function FlyoutComponent() {
  const t = useTranslations('Flyout');
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectedCards);
  const numberOfCards = useAppSelector(amountOfCards);
  const handleOnClick = () => dispatch(removeAll());
  const handleOnClickDownload = async (): Promise<void> => {
    const response = await fetch('/api/export-csv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cards),
    });

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `${cards.length}_items.csv`;

    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {numberOfCards > 0 && (
        <div className={styles['flyout-component']}>
          <p>{`${numberOfCards} ${t('desc')}`}</p>
          <button className={styles['unselect-button']} onClick={handleOnClick}>
            {t('unselect')}
          </button>

          <button
            className={styles['download-button']}
            value="download"
            onClick={handleOnClickDownload}
          >
            {t('download')}
          </button>
        </div>
      )}
    </>
  );
}
