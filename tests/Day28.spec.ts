import { test } from '@playwright/test';

const CUSTOM_TIMEOUT = { timeout: 15 * 1000 };

test('Handle Dropdown', async ({ page }) => {
    await page.goto('/dropdown');

    const dropdownLocator = page.locator('#dropdown');

    // 1. Select Option 01 - Index
    await dropdownLocator.selectOption({ index: 1 });
    await page.waitForTimeout(1000);

    // 2. Select Option 02 - Value
    await dropdownLocator.selectOption({ value: '2' });
    await page.waitForTimeout(1000);

    // 3. Select Option 01 - Label/Visible Text
    await dropdownLocator.selectOption({ label: 'Option 1' });
    await page.waitForTimeout(1000);

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(3 * 1000);
})

test('Handle iFrame', async ({ page }) => {
    await page.goto('/iframe');

    const iframeLocator = page.frameLocator('iframe[id^="mce"]');
    const textEditLocator = iframeLocator.locator('body p');
    await textEditLocator.click({ force: true });

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(3 * 1000);
})

test('Mouse Hover', async ({ page }) => {
    await page.goto('/hovers');

    // Find all the figures locators
    const allFiguresLocators = await page.locator('.figure').all();

    // Loop over all figures elements
    for (const figureLocator of allFiguresLocators) {
        // Scope down searching elements
        const imageLocator = figureLocator.locator('img');
        const usernameLocator = figureLocator.locator('h5');
        const hyperlinkLocator = figureLocator.locator('a');

        // Before mouse hover
        let usernameText = await usernameLocator.innerText();
        console.log(`Before mouse hover username: ${usernameText}`);
        let isUsernameVisible = await usernameLocator.isVisible();
        let isProfileHyperlinkVisible = await hyperlinkLocator.isVisible();
        console.log(`Before mouse hover isUsernameVisible: ${isUsernameVisible}`);
        console.log(`Before mouse hover isProfileHyperlinkVisible: ${isProfileHyperlinkVisible}`);

        // Mouse hover
        await imageLocator.hover();
        await page.waitForTimeout(1000);

        // After mouse hover
        usernameText = await usernameLocator.innerText();
        console.log(`After mouse hover username: ${usernameText}`);
        isUsernameVisible = await usernameLocator.isVisible();
        isProfileHyperlinkVisible = await hyperlinkLocator.isVisible();
        console.log(`After mouse hover isUsernameVisible: ${isUsernameVisible}`);
        console.log(`After mouse hover isProfileHyperlinkVisible: ${isProfileHyperlinkVisible}`);
    }    

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(3 * 1000);
})

test('Checking element states and handle dynamic control', async ({ page }) => {
    await page.goto('/dynamic_controls');

    // Find all parent components
    const checkboxComponent = page.locator('#checkbox-example');
    const inputComponent = page.locator('#input-example');

    // Interact with checkbox component's elements
    const checkboxLocator = checkboxComponent.locator('#checkbox input');
    let isCheckboxEnabled = await checkboxLocator.isEnabled();
    let isCheckboxChecked = await checkboxLocator.isChecked();
    if(!isCheckboxChecked){
        await checkboxLocator.check();
    }
    await page.waitForTimeout(1000);
    const removeButtonLocator = checkboxComponent.locator('button:has-text("Remove")');
    await removeButtonLocator.click();
    await page.waitForSelector('#checkbox-example #checkbox input', { state: 'hidden'});

    // Interact with input component's elements
    const inputLocator = inputComponent.locator('input');
    const enableButtonLocator = inputComponent.locator('button:has-text("Enable")');
    let isInputDisabled= await inputLocator.isDisabled();
    if(isInputDisabled){
        await enableButtonLocator.click();
        await inputLocator.isEnabled();
        inputLocator.fill('Test passed!')
    }
    
    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(3 * 1000);
})