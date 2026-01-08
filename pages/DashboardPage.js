
export class DashboardPage {
    constructor(page) {
        this.page = page;

        // Language switch
        this.languageBtn = page.locator('//*[@id="root"]/div/div/div[2]/header/div/div[2]/div/div[1]/div/div/img');
        this.memberManagementMenu = page.locator('text=Member Management');

        // Menu
        this.memberManagementMenu =
            page.getByRole('link', { name: /member management/i });
    }

    async switchToEnglish() {
        await this.languageBtn.click();
    }

    async openMemberManagement() {
        await this.memberManagementMenu.click();
        await this.memberManagementMenu.waitFor();
    }
}
