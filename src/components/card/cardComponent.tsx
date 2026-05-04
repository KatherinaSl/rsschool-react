import { Component, type ReactNode } from 'react';
import './cardComponent.css';
import type { AstronomicalObject } from '../../interfaces/interfaces';

export default class CardComponent extends Component<AstronomicalObject> {
  constructor(props: AstronomicalObject) {
    super(props);
  }

  render(): ReactNode {
    const { name, astronomicalObjectType, location } = this.props;
    return (
      <div className="card">
        <h4>{name}</h4>
        <p>
          <strong>Actronomical object type:</strong> {astronomicalObjectType}
        </p>
        {location && (
          <p>
            <strong>Location:</strong> {location.name}
          </p>
        )}
      </div>
    );
  }
}
