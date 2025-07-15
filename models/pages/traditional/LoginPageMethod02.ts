import { Locator, Page } from "@playwright/test";
import { LoginCreds } from "../../../test_data/computer/LoginDataType";

export default class LoginPageMethod01 {

    // Constructor
    constructor(private page: Page) {
        this.page = page;
    }

    public username(): Locator {
        return this.page.locator("#username");
    }

    public password(): Locator {
        return this.page.locator("#password");
    }
    
    public loginButton(): Locator {
        return this.page.locator("button[type='submit']");
    }

}