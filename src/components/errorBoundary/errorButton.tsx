import { Component, type ReactNode } from 'react';
import './fallbackComponent.css';

export default class ErrorButton extends Component {
  handleOnClick = () => {
    this.setState(() => {
      throw new Error('This is a test error!');
    });
  };

  render(): ReactNode {
    return (
      <button onClick={this.handleOnClick.bind(this)} className="error-button">
        Throw Error
      </button>
    );
  }
}
