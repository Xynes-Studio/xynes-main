import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir } from 'node:fs/promises';

test('homepage loads with semantic content, correct links and no browser errors', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.goto('/');
  await expect(page).toHaveTitle(/Xynes/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Your business is weird',
  );
  await expect(page.locator('[data-section]')).toHaveCount(6);
  await page.getByRole('link', { name: 'Explore', exact: true }).click();
  await expect(page).toHaveURL(/#cms$/);
  await expect(
    page.getByRole('heading', {
      name: 'Start with the bit that actually exists',
    }),
  ).toBeInViewport();
  await expect(
    page.getByRole('link', { name: 'See our code' }).first(),
  ).toHaveAttribute('href', 'https://github.com/Xynes-Studio');
  expect(errors).toEqual([]);
});

test('keyboard navigation and pending CTAs work at mobile width with reduced motion', async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused();
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeInViewport();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main-content$/);
  const cms = page.getByRole('button', { name: /Try Xynes CMS/ });
  await cms.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('status')).toHaveText(
    'The Xynes CMS destination is being prepared.',
  );
  await page.keyboard.press('Escape');
  await expect(page.getByRole('status')).toHaveCount(0);
  await expect(cms).toBeFocused();
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe('auto');
  for (const name of [/Or use our hosted services/, /Reach Out/]) {
    const button = page.getByRole('button', { name });
    await button.click();
    await expect(page.getByRole('status')).toBeVisible();
    await page.keyboard.press('Escape');
  }
});

for (const width of [320, 375, 768, 1024, 1440, 1728, 1920]) {
  test(`layout, artwork and accessibility at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1117 });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    for (const section of await page.locator('[data-section]').all()) {
      await section.scrollIntoViewIfNeeded();
    }
    await page.locator('#home').scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        page
          .locator('[data-artwork] img')
          .evaluateAll((images) =>
            images
              .filter((image) => image.getBoundingClientRect().width > 0)
              .every(
                (image) =>
                  (image as HTMLImageElement).complete &&
                  (image as HTMLImageElement).naturalWidth > 0,
              ),
          ),
      )
      .toBe(true);
    const dimensions = await page.evaluate(() => ({
      width: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.width);
    const clipped = await page
      .locator('h1, h2, h3, [data-section] p')
      .evaluateAll((nodes) =>
        nodes
          .filter((node) => node.scrollWidth > node.clientWidth + 2)
          .map((node) => node.textContent),
      );
    expect(clipped).toEqual([]);
    const imageGeometry = await page
      .locator('[data-artwork] img')
      .evaluateAll((nodes) =>
        nodes
          .filter((node) => node.getBoundingClientRect().width > 0)
          .map((node) => {
            const image = node as HTMLImageElement;
            const rect = image.getBoundingClientRect();
            return {
              src: image.getAttribute('src'),
              ratio: rect.width / rect.height,
              intrinsic:
                Number(image.getAttribute('width')) /
                Number(image.getAttribute('height')),
            };
          }),
      );
    for (const image of imageGeometry)
      expect(
        Math.abs(image.ratio / image.intrinsic - 1),
        image.src ?? 'asset',
      ).toBeLessThan(0.01);
    await mkdir('docs/verification', { recursive: true });
    await page.screenshot({
      path: `docs/verification/home-${width}.png`,
      fullPage: true,
    });
    if (width === 1728)
      await page
        .locator('#home')
        .screenshot({ path: 'docs/verification/hero-desktop.png' });
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations).toEqual([]);
  });
}

for (const viewport of [
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 1920, height: 720 },
  { width: 375, height: 812 },
]) {
  test(`each section covers the viewport at ${viewport.width}x${viewport.height}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    for (const section of await page.locator('[data-section]').all())
      await section.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        page
          .locator('[data-artwork] img')
          .evaluateAll((images) =>
            images
              .filter((image) => image.getBoundingClientRect().width > 0)
              .every(
                (image) =>
                  (image as HTMLImageElement).complete &&
                  (image as HTMLImageElement).naturalWidth > 0,
              ),
          ),
      )
      .toBe(true);
    await page.locator('#home').scrollIntoViewIfNeeded();
    const sizes = await page.locator('[data-section]').evaluateAll((sections) =>
      sections.map((section) => ({
        name: section.getAttribute('data-section'),
        height: section.getBoundingClientRect().height,
      })),
    );
    for (const section of sizes) {
      expect(section.height, section.name ?? 'section').toBeGreaterThanOrEqual(
        viewport.height - 1,
      );
      if (viewport.width >= 1440)
        expect(section.height).toBeLessThanOrEqual(viewport.height + 1);
    }
    const outside = await page
      .locator(
        'h1, h2, h3, [data-section] p, [data-section] button, [data-section] a',
      )
      .evaluateAll((nodes) =>
        nodes
          .filter((node) => {
            const section = node.closest('[data-section]');
            if (!section) return false;
            const rect = node.getBoundingClientRect();
            const bounds = section.getBoundingClientRect();
            return rect.bottom > bounds.bottom + 1 || rect.top < bounds.top - 1;
          })
          .map((node) => node.textContent),
      );
    expect(outside).toEqual([]);
    await page.screenshot({
      path: `docs/verification/viewport-${viewport.width}x${viewport.height}.png`,
      fullPage: true,
    });
  });
}
