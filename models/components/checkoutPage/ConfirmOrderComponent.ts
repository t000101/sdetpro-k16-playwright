import { Locator } from "@playwright/test";

export default class ConfirmOrderComponent {

    public static readonly LOCATOR = '#opc-confirm_order';

    private continueBtnSel = '[onclick="ConfirmOrder.save()"';

    constructor(private component: Locator) {
        this.component = component;
    }

    public async clickOnContinueBtn() {
        await this.component.locator(this.continueBtnSel).click();
    }

}