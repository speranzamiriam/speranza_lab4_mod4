import { BasePage } from "./base.page";

 class LoginPage extends BasePage {
    // Locators
    private username: string = '#txt-username';
    private password: string = '#txt-password';
    private loginButton: string = '#btn-login';

    constructor(){
        super();
    }

    async setUsername(text: string) {
        await this.driver.Page.fill(this.username, text);
    }

    async setPassword(text: string) {
        await this.driver.Page.fill(this.password, text);
    }

    async clickButton() {
        await this.driver.Page.click(this.loginButton);
    }

    async Login(username: string, password: string) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.clickButton();       
    }
}
export const loginPage = new LoginPage();
