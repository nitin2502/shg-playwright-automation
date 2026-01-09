import { faker } from '@faker-js/faker';

export class EditMemberIdentificationPage {
    constructor(page) {
        this.page = page;

        // File inputs (2 inputs: Front & Back)
        this.aadhaarFrontUpload = page.locator("input[type='file']").nth(0);
        this.aadhaarBackUpload  = page.locator("input[type='file']").nth(1);
        this.PANCardPhotoUpload = page.locator("input[type='file']").nth(2);

        this.PancardNum = page.getByPlaceholder('ABCDE1234F');

        // Buttons
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.nextButton = page.getByRole('button', { name: 'Next' });
    }

    async uploadAadhaarDocuments(frontPath, backPath) {
        await this.aadhaarFrontUpload.setInputFiles(frontPath);
        await this.page.waitForTimeout(1000);

        await this.aadhaarBackUpload.setInputFiles(backPath);
        await this.page.waitForTimeout(1000);
    }

    async saveDocuments() {
        await this.saveButton.click();
    }

    async pancardDetails(PanPath) {
        // 🔹 Faker PAN number (UPDATED)
        const panNumber =
            faker.string.alpha({ length: 5, casing: 'upper' }) +
            faker.string.numeric(4) +
            faker.string.alpha({ length: 1, casing: 'upper' });

        await this.PancardNum.fill(panNumber);
        await this.PANCardPhotoUpload.setInputFiles(PanPath);
        await this.page.waitForTimeout(1000);

        await this.nextButton.click();
    }
}
