import { Locator, Page } from "@playwright/test";

export default class ProductEssentialComponent {

    private allOptionSel = '.option-list input';
    private quantitySel = 'input[class*="qty-input"]';
    private addToCartBtnSel = 'input[class*="add-to-cart-button"]';
    private basePriceSel = 'span[class^="price-value"]';

    protected constructor(protected component: Locator) {
        this.component = component;
    }

    public async unselectAllOptions() {
        const allOptionLoc: Locator[] = await this.component.locator(this.allOptionSel).all();
        for (const optionLoc of allOptionLoc) {
            const isOptionSelected = await optionLoc.getAttribute('checked');
            if (isOptionSelected) {
                await optionLoc.click();
            }
        }
    }

    public async inputQuantity(quantity: number): Promise<void> {
        await this.component.locator(this.quantitySel).fill(quantity.toString());
    }

    /**
     * @returns requestLug to be fullfilled
     */
    public async clickOnAddToCartBtn(): Promise<string> {

        /**
         * https://demowebshop.tricentis.com/addproducttocart/details/72/1
         * 1. Detect the request url that we wanna listen
         * 2. Define an event listener
         * 3. Trigger the action that will trigger the request in the step 1 above
         * 4. Wait for the request fullfilled
         */
        await this.component.locator(this.addToCartBtnSel).click();
        return `**/addproducttocart/**`;
    }
    
    public async getBasePrice(): Promise<number> {
        const basePriceStr = await this.component.locator(this.basePriceSel).innerText();
        return Number (basePriceStr);
    }
}