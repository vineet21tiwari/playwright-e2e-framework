const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");

test.describe('Login Tests', ()=>{
    test('valid login', async ({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user','secret_sauce');
        await expect(page).toHaveURL(/inventory/);
    });

    test('invalid login', async ({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user','wrong_password');

        await expect(loginPage.errorMessage).toBeVisible();
    });

    test('empty credentials', async ({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.clickLogin();


        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Username is required');
    });
});