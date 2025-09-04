import { Locator } from "@playwright/test";

export default class ConfirmOrderComponent {

    public static readonly LOCATOR = '#opc-confirm_order';
    constructor(private component: Locator) {
        this.component = component;
    }
}