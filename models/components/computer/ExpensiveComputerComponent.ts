import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export default class ExpensiveComputerComponent extends ComputerEssentialComponent {
    
    public selectRAM(value: string) {
        throw new Error("Method not implemented.");
    }
}