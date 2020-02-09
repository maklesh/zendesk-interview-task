require('dotenv').config()

import BasePage from "./BasePage";

//locators
const loginPage = {
    loginPageUrl : process.env.LOGIN_PAGE_URL,
    zendeskLogo : '.logo',
    loginIframe : 'body > div:nth-child(3) > iframe',
    userEmail : '#user_email',
    userPassword : '#user_password',
    submitButton : 'input[value="Sign in"]'
}

export default class LoginPage extends BasePage {

    async visit(){
        await page.goto(loginPage.loginPageUrl);
    }

    async isLoginPageDisplayed() {
        await page.waitForSelector(loginPage.zendeskLogo);
        await page.waitForSelector(loginPage.loginIframe);
    }

    async submitLogin(user, password){
        const elementHandle = await page.$(
            loginPage.loginIframe,
        );
        const frame = await elementHandle.contentFrame();
    
        await frame.waitForSelector(loginPage.userEmail);
        await frame.waitForSelector(loginPage.userPassword);
        await frame.waitForSelector(loginPage.submitButton);

        await frame.type(loginPage.userEmail, user)
        await frame.type(loginPage.userPassword, password) 
        await frame.click(loginPage.submitButton) 
    }
}


