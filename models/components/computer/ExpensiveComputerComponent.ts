import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export default class ExpensiveComputerComponent extends ComputerEssentialComponent {
    public selectProcessor(value: string): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    
    public selectRAM(value: string): Promise<string | null>{
        throw new Error("Method not implemented.");
    }
}