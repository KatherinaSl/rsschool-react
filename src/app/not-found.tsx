import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="error-container">
      <div className="error-message">404 Not Found</div>
      <Link href="/">
        <button>Main page</button>
      </Link>
    </div>
  );
}
