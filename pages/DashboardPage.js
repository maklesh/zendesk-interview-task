import BasePage from "./BasePage";

//locators
const dashboardPage = {
    dashboardTitle: '._1bR--DashboardPage--dashboardTitle',
};

export default class DashboardPage extends BasePage{

    async isDashboardPageVisible(){
        await page.waitForSelector(dashboardPage.dashboardTitle);
    }
}