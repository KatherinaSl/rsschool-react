import { AstronomicalObject } from '@/interfaces/interfaces';
import { RootState } from '../../store';

export const amountOfCards = (state: RootState) => state.cardSelected.length;
export const selectedCards = (state: RootState) => state.cardSelected;
export const isSelected = (state: RootState, cardId: string) =>
  !!state.cardSelected.find((card: AstronomicalObject) => card.uid === cardId);
