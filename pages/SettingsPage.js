import BasePage from "./BasePage";

//locators
const settingsPage = {  
//Settings:
    leadSettings: '#sidebar > div > div > ul > li.leads > a',
    leadStatuses: '#leads-settings-tabs > li:nth-child(3) > a',
    addLeadStatusButton: '#lead-status > div.new-named-object > div.create.control-group > div > button',
    firstEditButton: '#lead-status > div.named-objects-list.named-objects-lead.ui-sortable > span:nth-child(1) > div > div > div > div > span.main-toolbar > button',
    statusInput: ('#lead-status > div.named-objects-list.named-objects-lead.ui-sortable > span:nth-child(1) > div > div > form > fieldset > div:nth-child(2) > div'),
    saveStatusButton: '#lead-status > div.named-objects-list.named-objects-lead.ui-sortable > span:nth-child(1) > div > div > form > fieldset > div:nth-child(3) > div > button',
}

const URL = {
    leadStatuses: 'https://app.futuresimple.com/settings/leads/lead-status',
}

export default class SettingsPage extends BasePage{

    async goToLeadSettings(){
        await page.waitForSelector(settingsPage.leadSettings);
        await page.click(settingsPage.leadSettings);
        await page.waitForSelector(settingsPage.leadStatuses);
    }

    async goToLeadStatuses(){
        await page.click(settingsPage.leadStatuses);
        await page.waitForSelector(settingsPage.addLeadStatusButton);
    }

    async goToLeadStatusesByUrl(){
        await page.goto(URL.leadStatuses);
        await page.waitForSelector(settingsPage.addLeadStatusButton)
    }

    async changeStatusValue(newValue){
        await page.waitForSelector(settingsPage.firstEditButton);
        await page.click(settingsPage.firstEditButton);
        await page.waitForSelector(settingsPage.statusInput);
        await page.click(settingsPage.statusInput, { clickCount: 3 })
        await page.type(settingsPage.statusInput, newValue);
        await page.click(settingsPage.saveStatusButton);
    }
}