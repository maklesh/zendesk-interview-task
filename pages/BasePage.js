export default class BasePage {
    async wait(time) {
        await page.waitFor(time);
    }

    async getTitle() {
        return await page.title();
    }
}