import { Locator } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";
import { selector } from "../../../SelectorDecorator.ts";


@selector('.column.customer-service')
export default class CustomerServiceColumnComponent extends FooterColumnComponent {

    constructor(component: Locator) {
        super(component);
    }
}