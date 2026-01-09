import { chromium } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';

async function globalSetup() {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.login();

    await context.storageState({ path: 'storage/auth.json' });
    await browser.close();
}

export default globalSetup;
