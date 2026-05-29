import type { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import type { SerializedError } from '@reduxjs/toolkit/react';
import './fallbackComponent.css';

export default function ErrorMessage({
  error,
}: {
  error: FetchBaseQueryError | SerializedError;
}) {
  if (!error) return null;

  if ('status' in error) {
    const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);

    return (
      <div role="alert" className="error">
        <h3>Something went wrong...</h3>
        <h4>Please, contact system administrator</h4>
        <p>{errMsg}</p>
      </div>
    );
  }

  return (
    <div role="alert" className="error">
      {error.message}
    </div>
  );
}
