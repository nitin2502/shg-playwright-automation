export class MemberManagementPage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('input[placeholder*="Search by name or Mobile No"]');
        this.rows = page.locator('tbody tr');
    }

    async editMemberByName(memberName) {
        await this.searchInput.fill(memberName);
        await this.page.waitForTimeout(1500); // wait API response

        const row = this.rows.first();
        await row.scrollIntoViewIfNeeded();
        await row.locator('button').first().click();
    }
}
