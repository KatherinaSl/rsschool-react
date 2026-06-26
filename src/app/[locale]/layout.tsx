import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/styles/global.css';
import '@/styles/vars.css';
import { ThemeProvider } from '@/context/themeProvider';
import { inter } from '../fonts';
import StoreProvider from '../StoreProvider';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Astronomical Objects Search',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en" className={inter.className}>
      <body>
        <StoreProvider>
          <ThemeProvider>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>{' '}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
