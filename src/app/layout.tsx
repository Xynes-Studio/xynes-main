import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import localFont from 'next/font/local';
import { getSiteOrigin, site } from '@/config/site';
import './globals.css';

// The package's pixel barrel preloads all five variants. Load only this design's variant.
const GeistPixelSquare = localFont({
  src: '../../node_modules/geist/dist/fonts/geist-pixel/GeistPixel-Square.woff2',
  variable: '--font-geist-pixel-square',
  weight: '500',
  adjustFontFallback: false,
  fallback: ['monospace'],
});

const origin = getSiteOrigin(process.env.SITE_URL);
export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: origin,
  alternates: origin ? { canonical: '/' } : undefined,
  openGraph: {
    title: site.title,
    description: site.description,
    type: 'website',
    locale: 'en_US',
    siteName: 'Xynes',
    url: origin,
  },
  twitter: {
    card: 'summary',
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
