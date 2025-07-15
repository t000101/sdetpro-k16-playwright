import { Locator } from "@playwright/test";
import ProductEssentialComponent from "../global/footer/ProductEssentialComponent";

export abstract class ComputerEssentialComponent extends ProductEssentialComponent{

    private allOptionSel = '.option-list input';
    
    constructor(component: Locator) {
        super(component);
    }

    public abstract selectProcessor(value: string): Promise<string | null>;
    public abstract selectRAM(value: string): Promise<string | null>;
    
    public selectHDD(value: string): Promise<string | null> {
        throw new Error("Method not implemented.");
    }

    protected async selectCompOption(type: string): Promise<string | null>{
        const selectorValue = `//label[contains(text(),"${type}")]`;
        const optionLocator = this.component.locator(selectorValue).first();
        await optionLocator.click();
        return await optionLocator.textContent();
    }

    public async unselectAllOptions() {
        const allOptionLoc: Locator[] = await this.component.locator(this.allOptionSel).all();
        for (const optionLoc of allOptionLoc) {
            const isOptionSelected = await optionLoc.getAttribute('checked');
            if(isOptionSelected) {
                await optionLoc.click();
            }
        }
    }
}