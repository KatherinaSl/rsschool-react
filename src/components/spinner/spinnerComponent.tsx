import type { ReactNode } from 'react';
import './spinnerComponent.css';

export default function SpinnerComponent(): ReactNode {
  return (
    <div className="spinner-container">
      <div className="spinner" data-testid="spinner"></div>
    </div>
  );
}
