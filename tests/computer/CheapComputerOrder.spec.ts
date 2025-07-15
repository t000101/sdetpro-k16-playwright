import { test } from "@playwright/test";
import { OrderComputerFlow } from "../../test_flows/computer/OrderComputerFlow";
import { cheapComputerData } from "../../test_data/computer/CheapComputerData";



test('Cheap Computer Component Test', async ({ page }) => {
    await page.goto('/build-your-cheap-own-computer');
    const orderComputerFlow = new OrderComputerFlow(page, cheapComputerData);
    await orderComputerFlow.buildComputerSpecAndAddToCart();
});
