export class EditMemberIdentificationPage {
    constructor(page) {
        this.page = page;


        // File inputs (2 inputs: Front & Back)
        this.aadhaarFrontUpload = page.locator("input[type='file']").nth(0);
        this.aadhaarBackUpload  = page.locator("input[type='file']").nth(1);
        this.PANCardPhotoUpload  =page.locator("input[type='file']").nth(2);
        this.PancardNum  = page.getByPlaceholder('ABCDE1234F');

        // Save button
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.nextButton = page.getByRole('button', { name: 'Next' });
    }
    async uploadAadhaarDocuments(frontPath, backPath) {

        //  Aadhaar Front – element scroll
               await this.aadhaarFrontUpload.setInputFiles(frontPath);
        await this.page.waitForTimeout(1000);

        // Aadhaar Back – element scroll
               await this.aadhaarBackUpload.setInputFiles(backPath);
        await this.page.waitForTimeout(1000);
    }


    async saveDocuments() {
        await this.saveButton.click();

        //Pancard details

    }
    async pancardDetails(PanPath)
    {
        await this.PancardNum.fill('CJCPG4756N');
        await this.PANCardPhotoUpload.setInputFiles(PanPath);
        await this.page.waitForTimeout(1000);

        await this.nextButton.click();
    }
}
