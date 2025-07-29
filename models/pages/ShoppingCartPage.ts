import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import CartItemRowComponent from "../components/shoppingCart/CartItemRowComponent";
import TotalsComponent from "../components/shoppingCart/TotalsComponent";

export default class ShoppingCartPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public async cartItemRowComponentList(): Promise<CartItemRowComponent[]> {
        const cartItemRowComps = await this.page.locator(CartItemRowComponent.LOCATOR).all();
        return cartItemRowComps.map(comp => new CartItemRowComponent(comp));
    }

    public totalsComponent(): TotalsComponent {
        return new TotalsComponent(this.page.locator(TotalsComponent.LOCATOR));
    }
}