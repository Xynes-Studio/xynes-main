import type { NextConfig } from 'next';
const config: NextConfig = {
  transpilePackages: [
    '@lumia-ui/components',
    '@lumia-ui/theme',
    '@lumia-ui/tokens',
  ],
  poweredByHeader: false,
  devIndicators: false,
  images: { qualities: [100], formats: ['image/webp'] },
};
export default config;
