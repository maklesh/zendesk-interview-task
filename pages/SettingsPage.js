import BasePage from "./BasePage";

//locators
const settingsPage = {
//Settings:
    leadSettings: '.leads',
    leadStatuses: '[data-toggle="lead-status"]',
    addLeadStatusButton: '#lead-status .btn.btn-mini.new',
    firstEditButton: '#lead-status .btn.btn-mini.edit',
    allStatuses: '#lead-status .named-object-lead',
    statusInput: ('#lead-status #name'),
    saveStatusButton: '#lead-status .btn.btn-primary.save',
    simpleButton: ('.btn'),
};

const URL = {
    leadStatuses: 'https://app.futuresimple.com/settings/leads/lead-status',
};

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

    async clickEditButtonByLeadStatusValue(searchText){
        const options = await page.$$(settingsPage.allStatuses);
        for (const option of options) {
            const label = await page.evaluate(el => el.innerText, option);
            if(label.includes(searchText)){
                let alpha = await option.$(settingsPage.simpleButton);
                await alpha.click();
                break;
            }
        }
    }

    async changeStatusValue(newValue){
        await page.waitForSelector(settingsPage.statusInput);
        await page.click(settingsPage.statusInput, { clickCount: 3 })
        await page.type(settingsPage.statusInput, newValue);
        await page.click(settingsPage.saveStatusButton);
    }
}