import '@testing-library/jest-dom/vitest';
import { createElement } from 'react';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

afterEach(() => {
  cleanup();
  vi.unstubAllEnvs();
});
vi.mock('geist/font/sans', () => ({ GeistSans: { variable: 'geist-sans' } }));
vi.mock('geist/font/mono', () => ({ GeistMono: { variable: 'geist-mono' } }));
vi.mock('next/font/local', () => ({
  default: () => ({ variable: 'geist-pixel' }),
}));
// Next Image's optimizer/SSR is verified in browser tests, not jsdom.
vi.mock('next/image', () => ({
  default: ({
    unoptimized: _unoptimized,
    quality: _quality,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & {
    unoptimized?: boolean;
    quality?: number;
  }) => {
    void _unoptimized;
    void _quality;
    return createElement('img', props);
  },
}));
