import { faker } from '@faker-js/faker';

export class EditMemberPersonalInfoPage {
    constructor(page) {
        this.page = page;

        // Inputs
        this.maternalName = page.getByPlaceholder('Maternal Name');
        this.email = page.getByPlaceholder('Enter your email');
        this.alternateMobile = page.getByPlaceholder('Alternate Mobile №');

        // Radio buttons
        this.disabilityNo = page.getByRole('radio', { name: /no/i });

        this.nextButton = page.getByRole('button', { name: 'Next' });
    }

    // ---------- WAITS ----------
    async waitForPage() {
        // keep as-is (if already working)
    }

    // ---------- ACTIONS ----------
    async fillPersonalInformation() {
        await this.waitForPage();

        await this.page.locator("xpath=//*[contains(text(),'Select Marital Status')]")
            .click({ force: true });
        await this.page.locator("xpath=//*[text()='Married']").click();

        // 🔹 Faker inputs (UPDATED)
        await this.maternalName.fill(faker.person.firstName());
        await this.email.fill(faker.internet.email());
        await this.alternateMobile.fill(
            faker.helpers.arrayElement(['6', '7', '8', '9']) +
            faker.string.numeric(9)
        );


        await this.page.locator("xpath=//*[contains(text(),'Select Religion')]")
            .click({ force: true });
        await this.page.locator("xpath=//*[text()='Jain']").click();

        await this.page.locator("xpath=//*[contains(text(),'Select category')]")
            .click({ force: true });
        await this.page.locator("xpath=//*[text()='Scheduled Tribe (ST)']").click();

        await this.page.locator("xpath=//*[contains(text(),'Select Blood Group')]")
            .click({ force: true });
        await this.page.locator("xpath=//*[text()='B+']").click();

        await this.page.locator("xpath=//*[contains(text(),'Select Education Level')]")
            .click({ force: true });
        await this.page.locator("xpath=//*[text()='12 Passed']").click();

        await this.page.locator("xpath=//*[contains(text(),'Enter your occupation')]")
            .click({ force: true });
        await this.page.locator("xpath=//*[text()='Homemaker']").click();

        await this.disabilityNo.check();

        await this.page.locator("xpath=//*[contains(text(),'Select Skills')]")
            .click({ force: true });
        await this.page.locator("xpath=//*[text()='Animal Care']").click();
    }

    async clickNext() {
        await this.nextButton.click();
    }
}
