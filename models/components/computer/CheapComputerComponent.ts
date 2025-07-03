import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";
import { selector } from "../../SelectorDecorator";

@selector('.product-essential')
export default class CheapComputerComponent extends ComputerEssentialComponent {

    constructor(component: Locator){
        super(component);
    }
    
    public async selectRAM(value: string) {
        await this.selectCompOption(value);
    }
}