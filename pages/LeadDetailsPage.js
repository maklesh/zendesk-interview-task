import BasePage from "./BasePage";

//locators
const leadDetailsPage = {  
    //leadpage
    leadHeader: '#lead-avatar',
    leadStatus: '#details > div > ul > div.status > div > a > span.lead-status',
    leadHeaderData: '#header > div > div > div > header > div > h1 > span.detail-title',

     //cleanUp:
     editLeadButton: '#header > div > div > div > header > div > h1 > span.detail-title > span.title-actions > a',
     deleteThisLeadButton: '#app-root > div > div > div._1_a--ModalsLayer--ModalsLayer._3rD--ModalsLayer--shadow.TNS--ModalsLayer--visible > div > span > span > div._1vs--ModalLayout--modalContainer > div > div._3w9--FilterableSections--FilterableSections.Qul--fonts--regular_m.vz7--fonts--regular.Mf6--effects--shadow_m._2fV--FormModalLayout--scrollableTabs > div > div.vGs--FilterableSections--footer > div > div > div:nth-child(1) > a > div',
     deleteCheckbox: '#app-root > div > div > div._1_a--ModalsLayer--ModalsLayer._3rD--ModalsLayer--shadow.TNS--ModalsLayer--visible > div:nth-child(2) > span > span > div._1vs--ModalLayout--modalContainer > div > div._1B5--ModalLayout--content > div > div._2gL--AbstractToggle--Toggle._2RL--keyboardMode--outlineWhenFocused.JXW--Checkbox--Toggle._2sD--AbstractToggle--multiline._2UQ--AbstractToggle--withLabel.kgD--AbstractToggle--placement_left._3vF--grid--width_grow',
     deleteDangerButton: '#app-root > div > div > div._1_a--ModalsLayer--ModalsLayer._3rD--ModalsLayer--shadow.TNS--ModalsLayer--visible > div:nth-child(2) > span > span > div._1vs--ModalLayout--modalContainer > div > div._1hp--ModalLayout--footer > div > div > button._1AM--Button--Button.Qul--fonts--regular_m.vz7--fonts--regular._2RL--keyboardMode--outlineWhenFocused._1KF--DangerButton--Button',
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