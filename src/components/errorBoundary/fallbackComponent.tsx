import { Component, type ReactNode } from 'react';
import './fallbackComponent.css';
import type { FallBackUIProps } from '../../interfaces/interfaces';

export default class FallbackComponent extends Component<FallBackUIProps> {
  constructor(props: FallBackUIProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div role="alert" className="error">
        <h3>Something went wrong...</h3>
        <p>{this.props.message}</p>
        {this.props.onReset && (
          <button className="reset-button" onClick={this.props.onReset}>
            Go back
          </button>
        )}
      </div>
    );
  }
}
