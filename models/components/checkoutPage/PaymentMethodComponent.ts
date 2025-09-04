import { Locator } from "@playwright/test";

export default class PaymentMethodComponent {

    public static readonly LOCATOR = '#opc-payment_method';
    constructor(private component: Locator) {
        this.component = component;
    }
}