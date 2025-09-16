import { Locator } from "@playwright/test";

export default class ShippingAddressComponent {

    public static readonly LOCATOR = '#opc-shipping';
    private continueBtnSel = '[onclick="Shipping.save()"]';

    constructor(private component: Locator) {
        this.component = component;
    }

    public async waitForComponentVisible() {
        return await this.component.locator(this.continueBtnSel).first().waitFor({ state: "visible" , timeout: 15 * 1000});
    }

    public async clickOnContinueBtn(): Promise<void> {
        await this.component.locator(this.continueBtnSel).click();
    }
}