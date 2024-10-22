import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000, // Global timeout for Playwright tests
  retries: 1, // Retry failed tests once
  use: {
    headless: true, // Run tests in headless mode
    screenshot: 'only-on-failure', // Take screenshots on failure
    video: 'on', // Record video of each test
    baseURL: 'https://example.com' // Define the base URL
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
});
