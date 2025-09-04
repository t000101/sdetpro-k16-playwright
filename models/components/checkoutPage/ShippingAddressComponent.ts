import { Locator } from "@playwright/test";

export default class ShippingAddressComponent {

    public static readonly LOCATOR = '#opc-shipping';
    constructor(private component: Locator) {
        this.component = component;
    }
}