import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/styles/global.css';
import '@/styles/vars.css';
import { ThemeProvider } from '@/context/themeProvider';

export const metadata: Metadata = {
  title: 'Astronomical Objects Search',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
