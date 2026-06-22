import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/styles/global.css';
import '@/styles/vars.css';
import { ThemeProvider } from '@/context/themeProvider';
import { inter } from './fonts';
import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
  title: 'Astronomical Objects Search',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <StoreProvider>
          <ThemeProvider>{children} </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
