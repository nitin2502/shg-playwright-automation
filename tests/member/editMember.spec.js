import {test} from "@playwright/test";
import {DashboardPage} from "../../pages/DashboardPage.js";
import {FamilyMembersPage} from "../../pages/FamilyMembersPage.js";
import {EditMemberIdentificationPage} from "../../pages/EditMemberIdentificationPage.js";
import {MemberManagementPage} from "../../pages/MemberManagementPage.js";
import {EditMemberPersonalInfoPage} from "../../pages/EditMemberPersonalInfoPage.js";

test('Edit member SATHEESH G', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    const memberPage = new MemberManagementPage(page);
    const personalInfoPage = new EditMemberPersonalInfoPage(page);
    const identificationPage = new EditMemberIdentificationPage(page);
    const family = new FamilyMembersPage(page);

    await page.goto('/member-management');

    await dashboard.switchToEnglish();
    await dashboard.openMemberManagement();

    // -------- Member Edit ----------
    try {
        await memberPage.editMemberByName('Mr. MOHD JAMEEL');
    } catch (e) {
        console.error('❌ Edit member failed:', e.message);
    }

    // -------- Personal Info ----------
    try {
        await personalInfoPage.fillPersonalInformation();
        await personalInfoPage.clickNext();
    } catch (e) {
        console.error('❌ Personal info failed:', e.message);
    }

    // -------- Identification ----------
    try {
        await identificationPage.uploadAadhaarDocuments(
            'assets/AdharFront.jpeg',
            'assets/AdharBack.jpeg'
        );
        await identificationPage.saveDocuments();
    } catch (e) {
        console.error('❌ Aadhaar upload failed:', e.message);
    }

    try {
        await identificationPage.pancardDetails('assets/Pancard.jpeg');
    } catch (e) {
        console.error('❌ PAN upload failed:', e.message);
    }

    // -------- Family Members ----------
    try {
        await family.fillFamilyDetails();
        await family.uploadRationDocument(
            'assets/ration-card-front.jpg',
            'assets/ration-card-back.jpg'
        );
        await family.saveAndNext();
    } catch (e) {
        console.error('❌ Family details failed:', e.message);
    }

    // -------- Address ----------
    try {
        await family.AddressInformation();
    } catch (e) {
        console.error('❌ Address failed:', e.message);
    }

    // -------- Bank ----------
    try {
        await family.bankAccount();
        await this.page.waitForTimeout(4000);
    } catch (e) {
        console.error('❌ Bank account failed:', e.message);
    }
});
