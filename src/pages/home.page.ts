import { BasePage } from "./base.page";
 export class HomePage extends BasePage {
    // Locators
   
    private makeAppointmentButton: string = '#btn-make-appointment';

    constructor(){
        super();
    }

  


    async ingresarMakeAppointment() {
        await this.driver.Page.click(this.makeAppointmentButton);
       
    }
}

