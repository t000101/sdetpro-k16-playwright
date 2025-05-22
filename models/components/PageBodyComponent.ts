import { Locator } from "@playwright/test";
import ProductItemComponent from "./ProductItemComponent";

export default class PageBodyComponent {
    public static readonly LOCATOR = '.page-body';

    constructor(private component: Locator) {
        this.component = component;
    }

    async productItemComponentList(): Promise<ProductItemComponent[]> {
        const productItemCompList = await this.component.locator(ProductItemComponent.LOCATOR).all();
        return productItemCompList.map(locator => new ProductItemComponent(locator));
    }
}