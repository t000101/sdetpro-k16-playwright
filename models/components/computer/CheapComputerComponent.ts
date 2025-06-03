import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export default class CheapComputerComponent extends ComputerEssentialComponent {

    constructor(component: Locator){
        super(component);
    }
    
    public async selectRAM(value: string) {
        await this.selectCompOption(value);
    }
}