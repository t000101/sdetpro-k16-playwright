import { Page } from "@playwright/test";
import FooterComponent from "../components/global/footer/FooterComponent";
import PageBodyComponent from "../components/PageBodyComponent";


export default class BasePage {

    protected page: Page;

    constructor (page: Page) { this.page = page; }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.LOCATOR));
    }

    pageBodyComponent(): PageBodyComponent {
        return new PageBodyComponent(this.page.locator(PageBodyComponent.LOCATOR));
    }
}