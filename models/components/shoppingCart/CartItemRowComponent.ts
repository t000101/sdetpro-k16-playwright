import { Locator } from "@playwright/test";

export default class CartItemRowComponent {

    public static readonly LOCATOR = '.cart-item-row';

    constructor(private component: Locator) {
        this.component = component;
    }

}