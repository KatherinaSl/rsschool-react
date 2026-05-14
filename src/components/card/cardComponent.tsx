import './cardComponent.css';
import type { AstronomicalObject } from '../../interfaces/interfaces';
import type { ReactNode } from 'react';

export default function CardComponent(props: AstronomicalObject): ReactNode {
  return (
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
  );
}
