import './cardComponent.css';
import type { AstronomicalObject } from '../../interfaces/interfaces';
import type { ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router';

export default function CardComponent(props: AstronomicalObject): ReactNode {
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get('pageNumber')
    ? searchParams.get('pageNumber')
    : 0;
  return (
    <>
      <Link to={`/cardDetails/${props.uid}?pageNumber=${pageNumber}`}>
        <div className="card">
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
    </>
  );
}
