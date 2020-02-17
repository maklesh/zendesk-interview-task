const dotenv = require('dotenv').config();
const config = require('../config');


import DashboardPage from '../pages/DashboardPage';
import LeadDetailsPage from '../pages/LeadDetailsPage';
import LoginPage from '../pages/LoginPage';
import NavBar from '../pages/components/NavBar';
import SettingsPage from '../pages/SettingsPage';


describe('Zendesk XXX Interview e2e suite', () => {
    let dashboardPage;
    let leadDetailsPage;
    let loginPage;
    let navBar;
    let settingsPage;
    let baseLeadStatus = 'New';
    let newLeadStatus = 'Canadian Beast';

    beforeAll(async () => {
        jest.setTimeout(config.timeout);
        dashboardPage = new DashboardPage;
        leadDetailsPage = new LeadDetailsPage;
        loginPage = new LoginPage;
        navBar = new NavBar;
        settingsPage = new SettingsPage;
    });

    describe('Login Part', () => {
    it('should navigate to Zendesk Sell login page', async () =>{
        await loginPage.visit();
        await loginPage.isLoginPageDisplayed();
    })

    it('should successfully submit login form', async () => {
        await loginPage.submitLogin(config.userMail, config.userPass);
        await navBar.isNavBarDisplayed();
        await dashboardPage.isDashboardPageVisible();
        let title = await dashboardPage.getTitle();
        expect(title).toContain('Zendesk Sell');
    })
})

    describe('Lead Part', () => {
        it('should create new Lead Bertram Gilfoyle', async () => {
            await navBar.goToAddLeadForm();
            await navBar.fillTheLeadForm(config.leadName, config.leadSecondName,config.leadCompanyName);
            await navBar.clickSaveAndViewLeadDetailsPage();
            await leadDetailsPage.seeLeadHeader();
            await leadDetailsPage.confirmCreationOfNewLead(config.leadName, config.leadSecondName);
            
        })

        it('check if status of new created lead is set to "New"', async() => {
            await leadDetailsPage.checkStatus(baseLeadStatus);
            await leadDetailsPage.getDedicatedUrl();
        })

        it('should change status from "New" to "Canadian Beast"', async () => {
            await navBar.goToSettings();
            await settingsPage.goToLeadSettings();
            await settingsPage.goToLeadStatuses();
            await settingsPage.clickEditButtonByLeadStatusValue(baseLeadStatus)
            await settingsPage.changeStatusValue(newLeadStatus);
        })

        it('The status name change is reflected in the Lead details page', async() => {
            await leadDetailsPage.navigateToDedicatedLead();
            await leadDetailsPage.checkStatus(newLeadStatus);
        })    
    })

    describe('Test cleanup, revenge of the Dinesh', ()=> {
        it('should delete created lead and revert status to New', async () =>{
            await leadDetailsPage.deleteCreatedLead();
            await settingsPage.goToLeadStatusesByUrl();
            await settingsPage.clickEditButtonByLeadStatusValue(newLeadStatus);
            await settingsPage.changeStatusValue(baseLeadStatus);
        })
    })
})
