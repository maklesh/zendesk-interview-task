//locators
const navBar = {    
        //nav buttons
        dashboardNavButton: '#nav-dashboard',
        workingLeadsNavButton: '#nav-working-leads',
        workingContactactsNavButton: '#nav-working-contacts',
        dealsNavButton: '#nav-working-deals',
        settingsButton: '#nav-settings',

        // adding new Lead 
        addButton: '#global-add > div > div > span > button',

        //lead screen opened from nav bar
        leadButton: '#app-root > div > div > div._3FD--PopoversLayer--PopoversLayer > span > span > div > div > div.Kct--PopoverBalloon--balloon.Mf6--effects--shadow_m > div > div > div:nth-child(1)',
        nameLeadInput: '#app-root > div > div > div._1_a--ModalsLayer--ModalsLayer._3rD--ModalsLayer--shadow.TNS--ModalsLayer--visible > div > span > span > div._1vs--ModalLayout--modalContainer > div > div._3w9--FilterableSections--FilterableSections.Qul--fonts--regular_m.vz7--fonts--regular.Mf6--effects--shadow_m._2fV--FormModalLayout--scrollableTabs > div > div.hLj--FilterableSections--content > div > div > section > div > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(1) > div._1PW--LabeledFieldLayout--content._8Ch--FormLayout--innerFormContent > div:nth-child(1) > div > div:nth-child(1) > div > div',
        lastNameLeadInput: '#app-root > div > div > div._1_a--ModalsLayer--ModalsLayer._3rD--ModalsLayer--shadow.TNS--ModalsLayer--visible > div > span > span > div._1vs--ModalLayout--modalContainer > div > div._3w9--FilterableSections--FilterableSections.Qul--fonts--regular_m.vz7--fonts--regular.Mf6--effects--shadow_m._2fV--FormModalLayout--scrollableTabs > div > div.hLj--FilterableSections--content > div > div > section > div > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(1) > div._1PW--LabeledFieldLayout--content._8Ch--FormLayout--innerFormContent > div:nth-child(1) > div > div:nth-child(2) > div > div',
        companyNameInput: '#app-root > div > div > div._1_a--ModalsLayer--ModalsLayer._3rD--ModalsLayer--shadow.TNS--ModalsLayer--visible > div > span > span > div._1vs--ModalLayout--modalContainer > div > div._3w9--FilterableSections--FilterableSections.Qul--fonts--regular_m.vz7--fonts--regular.Mf6--effects--shadow_m._2fV--FormModalLayout--scrollableTabs > div > div.hLj--FilterableSections--content > div > div > section > div > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(1) > div._1PW--LabeledFieldLayout--content._8Ch--FormLayout--innerFormContent > div:nth-child(2) > div > div > div._1PW--LabeledFieldLayout--content._8Ch--FormLayout--innerFormContent > span > div',
        saveAndViewNewLead: '#app-root > div > div > div._1_a--ModalsLayer--ModalsLayer._3rD--ModalsLayer--shadow.TNS--ModalsLayer--visible > div > span > span > div._1vs--ModalLayout--modalContainer > div > div._3w9--FilterableSections--FilterableSections.Qul--fonts--regular_m.vz7--fonts--regular.Mf6--effects--shadow_m._2fV--FormModalLayout--scrollableTabs > div > div.vGs--FilterableSections--footer > div > div > button:nth-child(3) > div',
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




