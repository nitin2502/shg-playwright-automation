import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 60 * 1000,
    globalSetup: './tests/auth/global-setup.js',

    use: {
        baseURL: 'https://uat-shg.shauryatechnosoft.com',
        headless: false,
        slowMo: 10000,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        storageState: 'storage/auth.json',
    },

    reporter: [
        ['list'],
        ['allure-playwright']
    ],
});
