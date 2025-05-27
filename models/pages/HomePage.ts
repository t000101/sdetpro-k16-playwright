import { Page } from "@playwright/test";
import PageBodyComponent from "../components/PageBodyComponent";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {

    constructor(page: Page) { super(page); }

    pageBodyComponent(): PageBodyComponent {
        return new PageBodyComponent(this.page.locator(PageBodyComponent.LOCATOR));
    }
}