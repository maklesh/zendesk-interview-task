'use strict';

//locators
const navBar = {
    //nav buttons
    dashboardNavButton: '#nav-dashboard',
    workingLeadsNavButton: '#nav-working-leads',
    workingContactactsNavButton: '#nav-working-contacts',
    dealsNavButton: '#nav-working-deals',
    settingsButton: '#nav-settings',

    // adding new Lead
    addButton: '#global-add button',

    //lead screen opened from nav bar
    leadButton: '[data-item-index="0"]',
    nameLeadInput: '[placeholder="First Name"]',
    lastNameLeadInput: '[placeholder="Last Name"]',
    companyNameInput: 'span[data-action="lead-company-name-dropdown"]',
    saveAndViewNewLead: 'button[data-action="save-and-visit"]',
    }

export default class NavBar {

    async isNavBarDisplayed(){
        await page.waitForSelector(navBar.dashboardNavButton);
        await page.waitForSelector(navBar.workingLeadsNavButton);
        await page.waitForSelector(navBar.workingContactactsNavButton);
        await page.waitForSelector(navBar.dealsNavButton);

    }
    async clickNavButton() {
        await page.click(navBar.dashboardNavButton)
    }

    async goToAddLeadForm(){
        await page.click(navBar.addButton);
        await page.click(navBar.leadButton);
        await page.waitForSelector(navBar.nameLeadInput);
        await page.waitForSelector(navBar.lastNameLeadInput);
        await page.waitForSelector(navBar.companyNameInput);
    }

    async fillTheLeadForm(leadName, leadSecondName, leadCompany) {
        await page.type(navBar.nameLeadInput, leadName);
        await page.click(navBar.lastNameLeadInput);
        await page.type(navBar.lastNameLeadInput, leadSecondName);
        await page.click(navBar.companyNameInput);
        await page.type(navBar.companyNameInput, leadCompany);
    }

    async clickSaveAndViewLeadDetailsPage() {
        await page.click(navBar.saveAndViewNewLead);
    }

    async goToSettings(){
        await page.waitForSelector(navBar.settingsButton);
        await page.click(navBar.settingsButton);
    }
}




