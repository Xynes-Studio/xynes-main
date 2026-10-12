import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Home from '@/app/page';
import RootLayout, { metadata } from '@/app/layout';

describe('Homepage composition', () => {
  it('tells the complete six-section story in heading and reading order', () => {
    const { container } = render(<Home />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(
      screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent),
    ).toEqual([
      'Start with the bit that actually exists',
      'Add things when you need them',
      'Your company will change',
      'Open source',
      "We're building the rest",
    ]);
    expect(
      [...container.querySelectorAll('[data-section]')].map((s) =>
        s.getAttribute('data-section'),
      ),
    ).toEqual([
      'hero',
      'cms',
      'modularity',
      'adaptability',
      'open-source',
      'roadmap',
    ]);
    expect(
      screen.getByRole('heading', { name: 'Xynes CMS', level: 3 }),
    ).toBeVisible();
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content');
  });

  it('preserves the original copy, emphasis and honest CTA destinations', () => {
    render(<Home />);
    const cms = screen.getByRole('region', {
      name: 'Start with the bit that actually exists',
    });
    expect(
      within(cms).getByText(/Flexible content and data/),
    ).toHaveTextContent(
      'Flexible content and data for websites, apps and internal tools.',
    );
    expect(within(cms).getByText('good CMS.').tagName).toBe('STRONG');
    expect(screen.getByRole('link', { name: 'Explore' })).toHaveAttribute(
      'href',
      '#cms',
    );
    for (const link of screen.getAllByRole('link', { name: 'See our code' }))
      expect(link).toHaveAttribute('href', 'https://github.com/Xynes-Studio');
    expect(
      screen.getByRole('button', { name: /Try Xynes CMS/ }),
    ).toHaveAccessibleName('Try Xynes CMS (destination pending)');
    expect(screen.getByRole('button', { name: /Reach Out/ })).toHaveAttribute(
      'title',
      'Destination pending',
    );
    expect(
      screen.getByText(/We could put twelve greyed-out/),
    ).toHaveTextContent("We won't.");
  });

  it('marks original illustrations decorative and reserves intrinsic dimensions', () => {
    const { container } = render(<Home />);
    const illustrations = container.querySelectorAll('[data-artwork]');
    expect(illustrations.length).toBeGreaterThan(10);
    for (const node of illustrations) {
      expect(node).toHaveAttribute('aria-hidden', 'true');
      const image = node.querySelector('img');
      expect(image).toHaveAttribute('alt', '');
      expect(image).toHaveAttribute('loading', 'lazy');
      expect(Number(image?.getAttribute('width'))).toBeGreaterThan(0);
      expect(Number(image?.getAttribute('height'))).toBeGreaterThan(0);
      expect(image?.getAttribute('src')).toMatch(/^\/assets\//);
    }
  });

  it('provides language, skip navigation, local fonts and SEO without a made-up origin', () => {
    const { container } = render(
      <RootLayout>
        <p>Page content</p>
      </RootLayout>,
    );
    expect(container.querySelector('html')).toHaveAttribute('lang', 'en');
    expect(
      screen.getByRole('link', { name: 'Skip to content' }),
    ).toHaveAttribute('href', '#main-content');
    expect(metadata.title).toContain('Xynes');
    expect(metadata.description).toContain('Open-source');
    expect(metadata.metadataBase).toBeUndefined();
  });

  it('sets the canonical and Open Graph origin when a deployment origin is configured', async () => {
    vi.stubEnv('SITE_URL', 'https://example.com');
    vi.resetModules();
    const { metadata: configured } = await import('@/app/layout');
    expect(configured.metadataBase).toEqual(new URL('https://example.com/'));
    expect(configured.alternates?.canonical).toBe('/');
    expect(configured.openGraph?.url).toEqual(new URL('https://example.com'));
  });
});
