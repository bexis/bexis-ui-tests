// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 5000 * 5,
  },
  reporter: 'html',

  use: {

    trace: 'on-first-retry',

  },



  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', testMatch: /GlobalSetupLogin\.spec\.js/ },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
      storageState: 'playwright/.auth/user.json',},

      dependencies: ['setup'],
    },

  /* {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
     use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

});
