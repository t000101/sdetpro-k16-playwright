import { Locator } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";

export default class FollowUsColumnComponent extends FooterColumnComponent {

    public static readonly LOCATOR = '.column.follow-us';

    constructor(component: Locator) {
        super(component);
    }
}