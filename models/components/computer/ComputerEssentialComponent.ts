import { Locator } from "@playwright/test";
import ProductEssentialComponent from "../global/footer/ProductEssentialComponent";

export abstract class ComputerEssentialComponent extends ProductEssentialComponent{
    constructor(component: Locator) {
        super(component);
    }

    abstract selectRAM(value: string);

    protected async selectCompOption(type: string){
        const selectorValue = `//label[contains(text(),"${type}")]`;
        await this.component.locator(selectorValue).first().click();
    }
}