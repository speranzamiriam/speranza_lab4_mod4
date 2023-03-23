// import { driverInstance } from "../src/core/driver";
import { driverInstance } from "../src/core/driver";
import { loginPage } from "../src/pages/login.page";
import { HomePage } from "../src/pages/home.page";
import { makeAppointment } from "../src/pages/makeAppointment.page";
jest.setTimeout(50000);
describe('Feature Login Katalon Demo', () => {
    //let loginPage: LoginPage;
    let homePage: HomePage;

    beforeAll(async () => {              
        await driverInstance.startDriver();
        //loginPage = new LoginPage();     
        homePage= new HomePage();     
    }, 30000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('ingresa a la pagina web de la aplicacion', async () => {
        await homePage.navigateTo('https://katalon-demo-cura.herokuapp.com/');
    });
    it('ingresa a la opcion Make Appointment', async () => {
        await homePage.ingresarMakeAppointment();
    });

    it('ingreso a la web como invitado con el usuario', async () => {
        await loginPage.Login('John Doe','ThisIsNotAPassword');
    });
    

    test('Validate Cart icon Counter', async () => {        
        expect( await makeAppointment.getValorTitulo()).toEqual("Make Appointment");         
    });
});