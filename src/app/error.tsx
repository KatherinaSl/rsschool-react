'use client';
import Link from 'next/link';

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <div role="alert" className="error">
          <h3>Something went wrong...</h3>
          <h4>Please, contact system administrator</h4>
          <p>{error.message}</p>

          <Link href="/" className="reset-button">
            Go home
          </Link>
        </div>
      </body>
    </html>
  );
}
