import { Locator } from "@playwright/test";
import { scrollToTop } from "../../../utils/PageUtils";

export default class HeaderComponent {
    public static readonly LOCATOR = '.header';

    private shoppingCartLinkSel = 'a[href="/cart"]';

    constructor(private component: Locator) {
        this.component = component;
    }

    public async clickOnShoppingCartLink(): Promise<void> {
        const shoppingCartLocator = this.component.locator(this.shoppingCartLinkSel).first();
        await shoppingCartLocator.scrollIntoViewIfNeeded();
        await shoppingCartLocator.click();
    }

}