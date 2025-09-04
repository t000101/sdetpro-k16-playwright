import { Locator } from "@playwright/test";

export default class TotalsComponent {
    public static readonly LOCATOR = '.totals';
    private tosSel = '#termsofservice';
    private checkOutBtnSel = '#checkout';
    private priceTableRowSel = '.cart-total tr';
    private priceTypeSel = '.cart-total-left';
    private priceValueSel = '.cart-total-right';

    constructor(private copmonent: Locator) {
        this.copmonent = copmonent;
    }

    public async priceCategories(): Promise<any> {
        let priceCategories = {};
        const priceTableRowLocs = await this.copmonent.locator(this.priceTableRowSel).all();
        for (const tableRow of priceTableRowLocs) {
            const priceTypeText = await tableRow.locator(this.priceTypeSel).innerText();
            const priceTypeValue = await tableRow.locator(this.priceValueSel).innerText();
            priceCategories[priceTypeText] = Number(priceTypeValue);
        }
        return priceCategories;
    }

    public async acceptTos(): Promise<void> {
        await this.copmonent.locator(this.tosSel).click();
    }

    public async clickOnCheckoutBtn(): Promise<void> {
        await this.copmonent.locator(this.checkOutBtnSel).click();
    }
}