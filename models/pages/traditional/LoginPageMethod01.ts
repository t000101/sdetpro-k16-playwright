import { Page } from "@playwright/test";
import { LoginCreds } from "../../../types/DataTypes";

export default class LoginPageMethod01 {
    // Scope to declare selectors
    private usernameSel: string = "#username";
    private passwordSel: string = "#password";
    private loginButtonSel: string = "button[type='submit']";


    // Constructor
    constructor(private page: Page) {
        this.page = page;
    }

    // Main interaction methods
    public async fillLoginForm({username, password}: LoginCreds): Promise<void> {
        await this.inputUsername(username);
        await this.inputPassword(password);
        await this.clickLoginButton();
    }

    public async inputUsername(username: string): Promise<void> {
        await this.page.locator(this.usernameSel).fill(username);
    }

    public async inputPassword(password: string): Promise<void> {
        await this.page.locator(this.passwordSel).fill(password);
    }
    
    public async clickLoginButton(): Promise<void> {
        await this.page.locator(this.loginButtonSel).click();
    }

}