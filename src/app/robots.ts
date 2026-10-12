import type { MetadataRoute } from 'next';
import { getSiteOrigin } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin(process.env.SITE_URL);
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: origin ? new URL('/sitemap.xml', origin).href : undefined,
  };
}
