import BasePage from "./BasePage";

//locators
const leadDetailsPage = {
    //leadpage
    leadHeader: '#lead-avatar',
    leadStatus: 'span.lead-status',
    leadHeaderData: 'span.detail-title',

    //cleanUp:
    editLeadButton: 'a.btn.detail-edit',
    deleteThisLeadButton: 'a[data-action="lead-delete-link"]',
    deleteCheckbox: '._1B5--ModalLayout--content [tabindex]',
    deleteDangerButton: '._1KF--DangerButton--Button',
}

const URL = {
    dedicatedlead: '',
}

export default class LeadDetailsPage extends BasePage {

    async seeLeadHeader(){
        await page.waitForSelector(leadDetailsPage.leadHeader);
    }

    async confirmCreationOfNewLead(leadName, leadSecondName){
        await page.waitForSelector(leadDetailsPage.leadHeaderData);
        const extractLead = await page.$(leadDetailsPage.leadHeaderData);
        const leadHeaderDataText = await page.evaluate(extractLead => extractLead.textContent, extractLead);
        expect(leadHeaderDataText).toContain(leadName);
        expect(leadHeaderDataText).toContain(leadSecondName);
    }

    async getDedicatedUrl(){
        URL.dedicatedlead = await page.url();
    }

    async checkStatus(status){
        await page.waitForSelector(leadDetailsPage.leadStatus);
        const extractStatus = await page.$(leadDetailsPage.leadStatus);
        const statusText = await page.evaluate(extractStatus => extractStatus.textContent, extractStatus);
        expect(statusText).toContain(status);
    }

    async navigateToDedicatedLead(){
        await page.goto(URL.dedicatedlead)
    } 

    async deleteCreatedLead(){
        await page.waitForSelector(leadDetailsPage.editLeadButton);
        await page.click(leadDetailsPage.editLeadButton);
        await page.waitForSelector(leadDetailsPage.deleteThisLeadButton);
        await page.click(leadDetailsPage.deleteThisLeadButton);
        await page.waitForSelector(leadDetailsPage.deleteCheckbox);
        await page.click(leadDetailsPage.deleteCheckbox);
        await page.waitForSelector(leadDetailsPage.deleteDangerButton);
        await page.click(leadDetailsPage.deleteDangerButton);
    }
}