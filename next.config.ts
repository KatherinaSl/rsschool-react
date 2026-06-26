import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

export const nextConfig: NextConfig = {
  distDir: './dist',
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
