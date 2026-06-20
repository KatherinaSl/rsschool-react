import './cardComponent.css';
import type { AstronomicalObject } from '../../interfaces/interfaces';
import type { ReactNode } from 'react';
// import Link from 'next/link';
// import {  useSearchParams } from 'react-router';
// import { useSelector } from 'react-redux';
// import type { RootState } from '../../lib/store';
// import CheckboxComponent from '../checkbox/checkboxComponent';
// import { isSelected } from '@/src/lib/features/cards/cardsSelectors';
// import { remove, save } from '@/src/lib/features/cards/cardsSlice';
// import { useAppDispatch } from '@/src/lib/hooks';

export default function CardComponent(props: AstronomicalObject): ReactNode {
  // const [searchParams] = useSearchParams();
  // const pageNumber = Number(searchParams.get('pageNumber')) || 1;

  // const isCardSelected = useSelector((state: RootState) =>
  //   isSelected(state, props.uid)
  // );
  // const dispatch = useAppDispatch()

  // const handleOnChange = () => {
  //   if (isCardSelected) {
  //     dispatch(remove(props.uid));
  //   } else {
  //     dispatch(save(props));
  //   }
  // };

  return (
    <div className="card">
      {/* <CheckboxComponent
        handleOnChange={handleOnChange}
        checked={isCardSelected}
      /> */}

      {/* <Link href={`/cardDetails/${props.uid}?pageNumber=${pageNumber}`}> */}
      <div>
        <h4>{props.name}</h4>
        <p>
          <strong>Actronomical object type:</strong>{' '}
          {props.astronomicalObjectType}
        </p>
        {props.location && (
          <p>
            <strong>Location:</strong> {props.location.name}
          </p>
        )}
      </div>
      {/* </Link> */}
    </div>
  );
}
