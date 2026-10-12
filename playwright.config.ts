import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  workers: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL: 'http://localhost:3200', trace: 'retain-on-failure' },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        channel:
          process.env.PLAYWRIGHT_CHANNEL === 'chromium' ? undefined : 'chrome',
      },
    },
  ],
  webServer: {
    command: 'corepack pnpm start',
    url: 'http://localhost:3200',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
