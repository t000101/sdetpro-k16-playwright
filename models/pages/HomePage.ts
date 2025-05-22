import { Page } from "@playwright/test";
import FooterComponent from "../components/global/FooterComponent";
import PageBodyComponent from "../components/PageBodyComponent";

export default class HomePage {

    constructor(private page: Page) { this.page = page; }

    pageBodyComponent(): PageBodyComponent {
        return new PageBodyComponent(this.page.locator(PageBodyComponent.LOCATOR));
    }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.LOCATOR));
    }
}