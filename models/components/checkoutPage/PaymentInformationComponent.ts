import { Locator } from "@playwright/test";

export default class PaymentInformationComponent {

    public static readonly LOCATOR = '#opc-payment_info';
    constructor(private component: Locator) {
        this.component = component;
    }
}