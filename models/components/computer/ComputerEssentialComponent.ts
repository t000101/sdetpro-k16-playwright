import { Locator } from "@playwright/test";
import ProductEssentialComponent from "../global/footer/ProductEssentialComponent";

export abstract class ComputerEssentialComponent extends ProductEssentialComponent{
    
    constructor(component: Locator) {
        super(component);
    }

    public abstract selectProcessor(value: string): Promise<string | null>;
    public abstract selectRAM(value: string): Promise<string | null>;
    
    public async selectHDD(value: string): Promise<string | null> {
        return this.selectCompOption(value);
    }

    public async selectSoftware(value: string): Promise<string | null> {
        return this.selectCompOption(value);
    }

    public async selectOs(value: string): Promise<string | null> {
        return this.selectCompOption(value);
    }

    protected async selectCompOption(type: string): Promise<string | null>{
        const selectorValue = `//label[contains(text(),"${type}")]`;
        const optionLocator = this.component.locator(selectorValue).first();
        await optionLocator.click();
        return await optionLocator.textContent();
    }
}