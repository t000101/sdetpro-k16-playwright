import { Locator } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";

export default class MyAccountColumnComponent extends FooterColumnComponent {

    public static readonly LOCATOR = '.column.my-account';

    constructor(component: Locator) {
        super(component);
    }
}