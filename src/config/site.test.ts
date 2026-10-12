import { describe, expect, it } from 'vitest';
import { getSiteOrigin, destinations } from './site';

describe('Destination configuration', () => {
  it.each([
    undefined,
    '',
    'invalid',
    'javascript:alert(1)',
    'ftp://example.com',
  ])('does not invent an origin from %s', (value) => {
    expect(getSiteOrigin(value)).toBeUndefined();
  });
  it.each(['https://example.com/path?x=1', 'http://localhost:3200'])(
    'normalizes %s to its origin',
    (value) => {
      expect(getSiteOrigin(value)?.href).toBe(`${new URL(value).origin}/`);
    },
  );
  it('requires every unknown destination to carry a visitor-facing explanation', () => {
    for (const destination of Object.values(destinations)) {
      if (destination.href) expect(destination.href).toMatch(/^(#|https:\/\/)/);
      else expect(destination.pending).toContain('being prepared');
    }
  });
});
