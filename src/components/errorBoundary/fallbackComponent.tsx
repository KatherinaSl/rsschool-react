import './fallbackComponent.css';
import type { FallBackUIProps } from '../../interfaces/interfaces';
import type { ReactNode } from 'react';

export default function FallbackComponent(props: FallBackUIProps): ReactNode {
  return (
    <div role="alert" className="error">
      <h3>Something went wrong...</h3>
      <p>{props.message}</p>
      {props.onReset && (
        <button className="reset-button" onClick={props.onReset}>
          Go back
        </button>
      )}
    </div>
  );
}
