import { Component, type ReactNode } from 'react';
import './spinnerComponent.css';

export default class SpinnerComponent extends Component {
  render(): ReactNode {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }
}
