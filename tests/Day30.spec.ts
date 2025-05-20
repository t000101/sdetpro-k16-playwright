import test from "@playwright/test";
import LoginPageMethod01 from "../models/pages/traditional/LoginPageMethod01.ts";
import { LoginCreds } from "../types/DataTypes.ts";
import LoginPageMethod02 from "../models/pages/traditional/LoginPageMethod02.ts";
import HomePage from "../models/pages/HomePage.ts";
import FooterComponent from "../models/components/global/FooterComponent.ts";

const loginCreds: LoginCreds = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!'
}

test.describe('Page Object Model - Approach 01', () => {
    test('Login Test', async ({ page }) => {
        const loginPage = new LoginPageMethod01(page);
        await page.goto('/login');
        await loginPage.fillLoginForm(loginCreds);
    })
})

test.describe('Page Object Model - Approach 02', () => {
    test('Login Test', async ({ page }) => {
        const loginPage = new LoginPageMethod02(page);
        await page.goto('/login');
        await loginPage.username().fill(loginCreds.username);
        await loginPage.password().fill(loginCreds.password);
        await loginPage.loginButton().click();
    })
})

test.describe('Page Object Model - Approach 03', () => {
    test('HomePage Test', async ({ page }) => {
        await page.goto('/');
        const homePage = new HomePage(page);
        const footerComponent = homePage.footerComponent();
        const poweredByText = footerComponent.powerByText();
        console.log('Powered by text: ', poweredByText)
    })
})