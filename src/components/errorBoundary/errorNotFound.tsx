import { NavLink } from 'react-router';
import './errorNotFound.css';

export default function ErrorNotFound() {
  return (
    <div className="error-container">
      <div className="error-message">404 Not Found</div>
      <NavLink to="/">
        <button>Main page</button>
      </NavLink>
    </div>
  );
}
