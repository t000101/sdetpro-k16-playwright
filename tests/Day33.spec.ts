import test from "@playwright/test";
import { ComputerEssentialComponent } from "../models/components/computer/ComputerEssentialComponent";
import CheapComputerComponent from "../models/components/computer/CheapComputerComponent";
import StandardComputerComponent from "../models/components/computer/StandardComputerComponent";
import { ComputerDetailsPage } from "../models/pages/ComputerDetailsPage";
import CustomerServiceColumnComponent from "../models/components/global/footer/CustomerSerrviceColumnComponent";

/**
 * 1. Seperate different components and use
 * 2.
 */

test('Cheap Computer Component Test', async ({ page }) => {
    await page.goto('/build-your-cheap-own-computer');
    const computerDetailsPage = new ComputerDetailsPage(page);
    // CheapComputerComponet: JUST A TEMPLATE
    const computerComponet = computerDetailsPage.computerComp(CheapComputerComponent);
    await computerComponet.selectRAM('8 GB');
    await page.waitForTimeout(3 * 1000);
});

test('Standard Computer Component Test', async ({ page }) => {
    await page.goto('/build-your-own-computer');
    // await selectRAM(StandardComputerComponent, '8GB');
    const computerComponent = new StandardComputerComponent(page.locator('.product-essential'));
    await computerComponent.selectRAM('8GB');
    await page.waitForTimeout(3 * 1000);
});

test('Test annotation - decoration approach', async ({ page }) => {
    getComponent(CustomerServiceColumnComponent);
});

const getComponent = (compClass) => console.log(compClass.selectorValue);
