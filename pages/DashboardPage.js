import BasePage from "./BasePage";

//locators
const dashboardPage = {
    dashboardPageContainer: '#app-root > div > div > div:nth-child(2) > div._1Ln--DashboardPage--DashboardPage',
}

export default class DashboardPage extends BasePage{

    async isDashboardPageVisible(){
        await page.waitForSelector(dashboardPage.dashboardPageContainer);
    }
}
