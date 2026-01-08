export  class  FamilyMembersPage{
    constructor(page) {
        this.page = page;
        //Input locator
        this.annualIncome = page.getByPlaceholder('Family Annual Income');
        this.rationCardNo = page.getByPlaceholder('Enter ration card №');
        this.addressLine = page.getByPlaceholder('Enter complete address with landmarks');
        //Radio Buttons
        this.rationCardType = (type) =>
            page.locator(`//span[normalize-space()='${type}']`);


        //FileUploads
        this.rationCardFrontPhoto = page.locator("input[type='file']").nth(0);
        this.rationCardBackPhoto = page.locator("input[type='file']").nth(1);

        //Button
        this.saveFamily = page.getByRole('button', { name: 'Save Family' });
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        this.addBankAccontBTN= page.getByRole('button', { name: 'Add Bank Account' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });

    }
    async fillFamilyDetails(){

        //Dropdown
        await this.page.locator("xpath=//*[contains(text(),'Select Landholding Category')]")
            .click({ force: true });
        await this.page.locator("xpath=//*[text()='Marginal']").click();

        await this.page.locator("xpath=//*[contains(text(),'Select the family ')]")
            .click({ force: true });
        await this.page.locator("xpath=//*[text()='Trade / Small Business']").click();

        //Annnual Income
        await this.annualIncome.fill('75000');
        await this.rationCardType('PHH').click();
        await this.rationCardType('AAY').click();
        await this.rationCardType('APL').click();
        await this.rationCardNo.fill("RC123456789");
    }
async uploadRationDocument (frontPath, backPath) {
 await this.rationCardFrontPhoto.setInputFiles(frontPath);
 await this.rationCardBackPhoto.setInputFiles(backPath);
}
async saveAndNext () {
        await  this.saveFamily.click();
        await this.nextButton.click();

}
async AddressInformation (){
await this.addressLine.fill('House / Flat: 45B\n' +
    'Building / Society: Sai Krupa Residency\n' +
    'Street / Area: 2nd Cross, Jayanagar 4th Block\n' +
    'PIN Code: 560011\n' +
    'Country: India');
    await this.saveBtn.click();
    await this.nextButton.click();
}
async bankAccount(){
await this.addBankAccontBTN.click();
await this.submitButton.click();
}

}