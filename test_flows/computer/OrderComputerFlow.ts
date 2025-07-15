import { Page } from "@playwright/test";
import { ComputerDataType } from "../../test_data/computer/ComputerDataType";
import { ComputerDetailsPage } from "../../models/pages/ComputerDetailsPage";

export class OrderComputerFlow {
    constructor(private page: Page, private computerData: ComputerDataType) {
        this.page = page;
        this.computerData = computerData;
    }

    /** This is a step
     * 1. A test step in a flow should not go over more than one page/screen
     * 2. If a page contains many individual part, we can split them up
     */
    async buildComputerSpecAndAddToCart() {
        const computerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComponent = computerDetailsPage.computerComp(this.computerData.computerCompClass);

        // Unseclect all default options
        await computerComponent.unselectAllOptions();

        // Build computer spec base on test data
        const {processorType, hdd, ram, software, os} = this.computerData;
        const processorAdditionalPrice = this.getAditionalPrice(await computerComponent.selectProcessor(processorType));
        const ramAdditionalPrice = this.getAditionalPrice(await computerComponent.selectRAM(ram));
        const hddAdditionalPrice = this.getAditionalPrice(await computerComponent.selectHDD(hdd));

        console.log('processorAdditionalPrice: ', processorAdditionalPrice);
        console.log('ramAdditionalPrice: ', ramAdditionalPrice);
        console.log('hddAdditionalPrice: ', hddAdditionalPrice);

        // DEBUG PURPOSE ONLY
        // await this.page.waitForTimeout(3000);
    }

    private getAditionalPrice(optionFullText: string | null): number{
        if(optionFullText === null) {
            optionFullText = '';
        }
        const regex = /\+\d+\.\d+/g;
        const matches = optionFullText.match(regex);

        if(matches) {
            return Number(matches[0].replace('+', '').trim());
        }

        return 0;
    }
}