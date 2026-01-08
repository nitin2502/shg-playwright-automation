import { test } from '@playwright/test';
import { DashboardPage } from '../../pages/DashboardPage.js';
import { MemberManagementPage } from '../../pages/MemberManagementPage.js';
import {EditMemberPersonalInfoPage} from "../../pages/EditMemberPersonalInfoPage.js";
import {EditMemberIdentificationPage} from "../../pages/EditMemberIdentificationPage.js";
import {FamilyMembersPage} from "../../pages/FamilyMembersPage.js";

test('Edit member SATHEESH G', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    const memberPage = new MemberManagementPage(page);
    const personalInfoPage = new EditMemberPersonalInfoPage(page);
    const identificationPage = new EditMemberIdentificationPage(page);
    const family     = new FamilyMembersPage(page);
    await page.goto('/member-management');

    await dashboard.switchToEnglish();
    await dashboard.openMemberManagement();

    await memberPage.editMemberByName('LIC MF LARGE AND MIDCAP FUND');

    //  Now Personal Info page is open
    await personalInfoPage.fillPersonalInformation();

    await personalInfoPage.clickNext();


    await identificationPage.uploadAadhaarDocuments(
        'assets/AdharFront.jpeg',
        'assets/AdharBack.jpeg'
    );

    await identificationPage.saveDocuments();

    // ⏸ Pause for visual verification
    await page.waitForTimeout(2000);
    await identificationPage.pancardDetails(
        'assets/Pancard.jpeg');
    await page.waitForTimeout(2000);

    // Test FamilyMembers
    await family.fillFamilyDetails();
    await family.uploadRationDocument(
        'assets/ration-card-front.jpg','assets/ration-card-back.jpg'
    );

   // await family.saveAndNext();
    await family.AddressInformation();
    await page.waitForTimeout(8000);
// Bank Accounts
    await family.bankAccount();
    await page.waitForTimeout(3000);
});