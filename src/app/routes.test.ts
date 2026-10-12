import { afterEach, describe, expect, it, vi } from 'vitest';
import robots from './robots';
import sitemap from './sitemap';

afterEach(() => vi.unstubAllEnvs());
describe('SEO routes', () => {
  it('omits unknown production URLs', () => {
    vi.stubEnv('SITE_URL', '');
    expect(sitemap()).toEqual([]);
    expect(robots()).toEqual({
      rules: { userAgent: '*', allow: '/' },
      sitemap: undefined,
    });
  });
  it('generates URLs from the configured origin', () => {
    vi.stubEnv('SITE_URL', 'https://example.com/ignored-path');
    expect(sitemap()).toEqual([{ url: 'https://example.com/' }]);
    expect(robots().sitemap).toBe('https://example.com/sitemap.xml');
  });
  it('rejects an invalid production origin', () => {
    vi.stubEnv('SITE_URL', 'javascript:alert(1)');
    expect(sitemap()).toEqual([]);
    expect(robots().sitemap).toBeUndefined();
  });
});
