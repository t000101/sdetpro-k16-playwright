import { Page } from "@playwright/test";
import BasePage from "./BasePage";

export default class CheckOutOptionPage extends BasePage {

    private checkOutAsGuestBtn = 'input[class*="checkout-as-guest-button"]';

    constructor(page: Page) {
        super(page);
    }

    public async clickOnCheckOutAsGuestBtn(): Promise<void> {
        await this.page.locator(this.checkOutAsGuestBtn).click();
    }
}