export class MemberManagementPage {
    constructor(page) {
        this.page = page;
    }

    async editMemberByName(memberName) {
        const row = this.page.locator('tr', {
            has: this.page.locator(`text=${memberName}`)
        });

        await row.locator('button svg').first().click(); // Edit icon

    }
}
