'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import styles from './checkboxComponent.module.css';
import { RootState } from '@/lib/store';
import { remove, save } from '@/lib/features/cards/cardsSlice';
import { isSelected } from '@/lib/features/cards/cardsSelectors';
import { AstronomicalObject } from '@/interfaces/interfaces';

export default function CheckboxComponent({
  card,
}: {
  card: AstronomicalObject;
}) {
  const isCardSelected = useAppSelector((state: RootState) =>
    isSelected(state, card.uid)
  );
  const dispatch = useAppDispatch();

  const handleOnChange = () => {
    if (isCardSelected) {
      dispatch(remove(card.uid));
    } else {
      dispatch(save(card));
    }
  };
  return (
    <div className={styles.checkbox}>
      <label>
        <input
          type="checkbox"
          checked={isCardSelected}
          onChange={handleOnChange}
        />
        Select
      </label>
    </div>
  );
}
