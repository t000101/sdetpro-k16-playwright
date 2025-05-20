import { Page } from "@playwright/test";
import FooterComponent from "../components/global/FooterComponent";

export default class HomePage {

    constructor(private page: Page) { this.page = page; }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.LOCATOR));
    }
}