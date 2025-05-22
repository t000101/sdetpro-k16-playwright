import { Locator } from "@playwright/test";

export default class ProductItemComponent {
    public static readonly LOCATOR = '.product-item';
    private productTitleSelector = '.product-title';
    private producttPriceSelector = '.price.actual-price';
    
    constructor(private component: Locator){
        this.component = component;
    }

    async getProductTitle(): Promise<string> {
        return await this.component.locator(this.productTitleSelector).innerText();
    }

    async getProductPrice(): Promise<string> {
        return await this.component.locator(this.producttPriceSelector).innerText();
    }
}