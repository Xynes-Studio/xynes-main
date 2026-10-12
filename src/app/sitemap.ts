import type { MetadataRoute } from 'next';
import { getSiteOrigin } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin(process.env.SITE_URL);
  return origin ? [{ url: origin.href }] : [];
}
