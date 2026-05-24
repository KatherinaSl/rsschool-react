import './cardComponent.css';
import type { AstronomicalObject } from '../../interfaces/interfaces';
import type { ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router';
import { isSelected, remove, save } from '../../store/slice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import CheckboxComponent from '../checkbox/checkboxComponent';

export default function CardComponent(props: AstronomicalObject): ReactNode {
  const [searchParams] = useSearchParams();
  const pageNumber = Number(searchParams.get('pageNumber')) || 1;

  const isCardSelected = useSelector((state: RootState) =>
    isSelected(state, props.uid)
  );
  const dispatch = useDispatch();

  const handleOnChange = () => {
    if (isCardSelected) {
      dispatch(remove(props.uid));
    } else {
      dispatch(save(props));
    }
  };

  return (
    <div className="card">
      <CheckboxComponent
        handleOnChange={handleOnChange}
        checked={isCardSelected}
      />

      <Link to={`/cardDetails/${props.uid}?pageNumber=${pageNumber}`}>
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
      </Link>
    </div>
  );
}
