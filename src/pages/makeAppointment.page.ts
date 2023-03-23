import { BasePage } from "./base.page";
 class MakeAppointment extends BasePage {
    // Locators
   
    private makeAppointmentTitle: string = "//section[@id='appointment']/div/div/div/h2";

    constructor(){
        super();
    }

  


    async getValorTitulo() {
        await this.driver.Page.waitForSelector(this.makeAppointmentTitle)
        console.log(await this.driver.Page.textContent(this.makeAppointmentTitle));
        return await this.driver.Page.textContent(this.makeAppointmentTitle);
       
    }
}
export const makeAppointment = new MakeAppointment();
