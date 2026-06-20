'use client';
import Link from 'next/link';
import '../components/error/errorNotFound.css';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <div role="alert" className="error">
          <h3>Something went wrong...</h3>
          <p>{error.message}</p>

          <Link href="/" className="reset-button">
            Go home
          </Link>
        </div>
      </body>
    </html>
  );
}
