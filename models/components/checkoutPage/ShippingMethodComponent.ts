import { Locator } from "@playwright/test";

export default class ShippingMethodComponent {

    public static readonly LOCATOR = '#opc-shipping_method';
    private allShippingMethodSel = '.method-list label';
    private continueBtnSel = '[onclick="ShippingMethod.save()"]';

    constructor(private component: Locator) {
        this.component = component;
    }

    public async waitForAllShippingMethodSelVisible(): Promise<void> {
        return this.waitForComponentVisible(this.allShippingMethodSel);
    }

    public async waitForContinueBtnSelVisible(): Promise<void> {
        return this.waitForComponentVisible(this.continueBtnSel);
    }

    public async waitForComponentVisible(component: string): Promise<void> {
        return await this.component.locator(component).first().waitFor({ state: "visible" });
    }

    public async getAllShippingMethodsLocs(): Promise<Locator[]> {
        return await this.component.locator(this.allShippingMethodSel).all();
    }

    public async clickOnContinueBtn(): Promise<void> {
        return await this.component.locator(this.continueBtnSel).click();
    }
}