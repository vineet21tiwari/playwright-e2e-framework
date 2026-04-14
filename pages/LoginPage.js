const {expect} =  require('@playwright/test');

class LoginPage {
    constructor(page){
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginInput = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }
    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    async enterUsername(username){
        await this.usernameInput.fill(username);
    }

     async enterPassword(password){
        await this.passwordInput.fill(password);
    }

    async clickLogin(){
        await this.loginInput.click();
    }

    
    async login(username,password){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}

module.exports = {LoginPage};