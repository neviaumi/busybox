import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  expect: {
    timeout: 5000,
  },

  forbidOnly: !!process.env['CI'],

  fullyParallel: true,

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

  reporter: 'html',

  retries: process.env['CI'] ? 2 : 0,

  testDir: './tests',

  timeout: 30 * 1000,

  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
  },

  webServer: {
    command: 'npm run start',
    port: 4200,
  },

  workers: process.env['CI'] ? 1 : undefined,
};

// eslint-disable-next-line import/no-default-export
export default config;
