import { Locator } from "@playwright/test";

export default class ShippingMethodComponent {

    public static readonly LOCATOR = '#opc-shipping_method';

    constructor(private component: Locator) {
        this.component = component;
    }
}