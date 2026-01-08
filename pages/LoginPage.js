console.log('LoginPage loaded');

export class LoginPage {
    constructor(page) {
        this.page = page;

        this.username = page.getByPlaceholder('वापरकर्तानाव');
        this.password = page.getByPlaceholder('पासवर्ड');
        this.loginBtn = page.locator('button:has-text("लॉगिन")');
    }

    async login() {
        await this.page.goto('https://uat-shg.shauryatechnosoft.com/auth/sign-in/ngo');

        await this.username.fill('ngoadmin@gmail.com');
        await this.password.fill('Ngo@1234');

        await this.loginBtn.click();

        await this.page.waitForURL('**/dashboard', { timeout: 10000 });
    }
}


