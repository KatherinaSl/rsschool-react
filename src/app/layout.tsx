import type { Metadata } from 'next';
import '../index.css';
import { ReactNode } from 'react';
import '../components/search/searchComponent.css';

export const metadata: Metadata = {
  title: 'Astronomical Objects Search',
};

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <div className="header">
//           <h1>Star Track Astronomical Objects Search:</h1>
//           <Link href="/about">About</Link>
//           {/* <button onClick={toggleTheme}>
//           {theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//         </button> */}
//         </div>
//         <div>
//           <input
//             name="search"
//             type="text"
//             placeholder="Search..."
//             // value={searchTerm}
//             // onChange={handleOnChange}
//           />
//           <button
//             type="submit"
//             // onClick={handleOnClick}
//           >
//             Search
//           </button>
//         </div>
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
