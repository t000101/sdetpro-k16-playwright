import test from "@playwright/test";
import HomePage from '../models/pages/HomePage';

test('HomePage Test', async ({ page }) => {
    await page.goto('/');
    const homePage = new HomePage(page);
    const pageBodyComponent = homePage.pageBodyComponent();
    const prodcutItemCompList = await pageBodyComponent.productItemComponentList();
    for (const prodcutItemComp of prodcutItemCompList) {
        const productTitle = await prodcutItemComp.getProductTitle();
        const productPrice = await prodcutItemComp.getProductPrice();
        console.log(`[${productTitle} - ${productPrice}]`);
    }
})
