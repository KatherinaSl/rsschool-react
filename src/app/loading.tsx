import { ReactNode } from 'react';
import '../components/spinner/spinnerComponent.css';

export default function SpinnerComponent(): ReactNode {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
}
