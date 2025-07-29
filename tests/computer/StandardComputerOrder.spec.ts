import { test } from "@playwright/test";
import { OrderComputerFlow } from "../../test_flows/computer/OrderComputerFlow";
import { standardComputerData } from "../../test_data/computer/StandardComputerData";


test('Standard Computer Component Test', async ({ page }) => {
    await page.goto('/build-your-own-computer');
    const orderComputerFlow = new OrderComputerFlow(page, standardComputerData);
    await orderComputerFlow.buildComputerSpecAndAddToCart();
    await orderComputerFlow.verifyShoppingCart();
});
