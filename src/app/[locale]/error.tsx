'use client';

import ErrorMessage from '../_components/error/errorMessage';

export default function GlobalError({ error }: { error: Error }) {
  return <ErrorMessage error={error} />;
}
