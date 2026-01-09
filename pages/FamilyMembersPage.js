import { faker } from '@faker-js/faker';

export class FamilyMembersPage {
    constructor(page) {
        this.page = page;

        // Input locators
        this.annualIncome = page.getByPlaceholder('Family Annual Income');
        this.rationCardNo = page.getByPlaceholder('Enter ration card №');
        this.addressLine = page.getByPlaceholder('Enter complete address with landmarks');

        // Radio Buttons
        this.rationCardType = (type) =>
            page.locator(`//span[normalize-space()='${type}']`);

        // File Uploads
        this.rationCardFrontPhoto = page.locator("input[type='file']").nth(0);
        this.rationCardBackPhoto  = page.locator("input[type='file']").nth(1);

        // Buttons
        this.saveFamily = page.getByRole('button', { name: 'Save Family' });
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        this.addBankAccontBTN = page.getByRole('button', { name: 'Add Bank Account' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async fillFamilyDetails() {
        // Dropdowns
        await this.page.locator("xpath=//*[contains(text(),'Select Landholding Category')]")
            .click({ force: true });
        await this.page.locator("xpath=//*[text()='Marginal']").click();

        await this.page.locator("xpath=//*[contains(text(),'Select the family ')]")
            .click({ force: true });
        await this.page.locator("xpath=//*[text()='Trade / Small Business']").click();

        // 🔹 Faker inputs (UPDATED ONLY)
        await this.annualIncome.fill(faker.number.int({ min: 50000, max: 200000 }).toString());
        await this.page.waitForTimeout(1000);
        await this.rationCardType('PHH').click();

        await this.rationCardNo.fill(
            'RC' + faker.string.numeric(10)
        );
    }

    async uploadRationDocument(frontPath, backPath) {
        await this.rationCardFrontPhoto.setInputFiles(frontPath);
        await this.rationCardBackPhoto.setInputFiles(backPath);
    }

    async saveAndNext() {
        await this.page.waitForTimeout(1000);
        await this.saveFamily.click();
        await this.page.waitForTimeout(1000);
        await this.nextButton.click();
    }

    async AddressInformation() {
        // 🔹 Faker address (UPDATED ONLY)
        const address =
            `House / Flat: ${faker.location.buildingNumber()}\n` +
            `Building / Society: ${faker.company.name()}\n` +
            `Street / Area: ${faker.location.streetAddress()}\n` +
            `PIN Code: ${faker.location.zipCode('######')}\n` +
            `Country: India`;

        await this.addressLine.fill(address);
        await this.saveBtn.click();
        await this.nextButton.click();
    }

    async bankAccount() {
        await this.addBankAccontBTN.click();
        await this.submitButton.click();
    }
}
