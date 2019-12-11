import { Selector, t } from 'testcafe';

class InitialPage {  
    constructor() {
        this.loginInput = Selector('input[name=username]');
        this.passwordInput = Selector('input[name=password]');
        this.loginButton = Selector('#btn-login');
    }

    async resizeWindow(width, height) {
        await t
            .resizeWindow(width, height);
    }

    async loginTheApp(login, password) {
        await t
            .typeText(this.loginInput, login)
            .typeText(this.passwordInput, password)
            .click(this.loginButton);
    }
}
export default new InitialPage();
