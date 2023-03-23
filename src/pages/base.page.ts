import { Driver, driverInstance } from "../core/driver"

export abstract class BasePage {
    protected driver: Driver;

    constructor(){
        this.driver = driverInstance;
    }

    async navigateTo(url: string) {
        await this.driver.Page.goto(url, { waitUntil: 'networkidle' });
    }

    async getElementText(locator: string) {      
        return this.driver.Page.textContent(locator);
    }
}