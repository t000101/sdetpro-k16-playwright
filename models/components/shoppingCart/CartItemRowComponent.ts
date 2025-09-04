import { Locator } from "@playwright/test";

export default class CartItemRowComponent {

    public static readonly LOCATOR = '.cart-item-row';
    private productUnitPriceSel = '.product-unit-price';
    private quantityInputPriceSel = 'input[class*="qty-input"]';
    private subTotalPriceSel = '.product-subtotal';

    constructor(private component: Locator) {
        this.component = component;
    }

    public async unitPrice(): Promise<number>{
        const unitPrice = await this.component.locator(this.productUnitPriceSel).textContent();
        return Number(unitPrice);
    }

    public async quantity(): Promise<number>{
        const quantity = await this.component.locator(this.quantityInputPriceSel).getAttribute('value');
        return Number(quantity);
    }

    public async subTotal(): Promise<number>{
        const subTotal = await this.component.locator(this.subTotalPriceSel).textContent();
        return Number(subTotal);
    }

}