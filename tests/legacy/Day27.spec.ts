import { expect, test } from '@playwright/test';

const CUSTOM_TIMEOUT = { timeout: 15 * 1000 };

test('Link Text - XPATH', async ({ page }) => {
    await page.goto('/');

    // const footerLoc = page.locator("//a[contains (text(), 'Elemental Selenium_')]");
    const linkEle = await page.waitForSelector("//a[contains (text(), 'Elemental Selenium')]", CUSTOM_TIMEOUT);
    await linkEle.click();

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(3 * 1000);
})

test('Link Text - CSS', async ({ page }) => {
    await page.goto('/');

    const linkEle = await page.waitForSelector("a:has-text('Elemental Selenium')", CUSTOM_TIMEOUT);
    await linkEle.click();

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(3 * 1000);
})

test('Link Text - Filtering', async ({ page }) => {
    await page.goto('/');

    const formAuthLink = page.locator("a").filter({ hasText: 'Form Authentication' });
    await formAuthLink.click();

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(3 * 1000);
})

test('Handle multiple matching', async ({ page }) => {
    await page.goto('/');

    const items = page.locator("a");
    const matchItemNumbers = await items.count();
    console.log('Total items: ', matchItemNumbers);

    // Interact on specific index item
    await items.nth(2).click();

    // Interact on the first item
    await items.first().click();

    // Interact on the last item
    await items.last().click;

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(3 * 1000);
})

test('Fill form Authentication', async ({ page }) => {
    await page.goto('/');

    // 1. Navigate to Form Authentication page
    const formAuthLink = page.locator("a").filter({ hasText: 'Form Authentication' });
    await formAuthLink.click();

    // 2. Fill the form
    await page.locator("#username").fill("tomsmith");
    await page.locator("#password").fill("SuperSecretPassword!");
    await page.locator("button:has-text(' Login')").click();

    // 3. Get the heading text on dashboard page
    const dashboardHeadingLoc = "h2";
    let textContent = await page.locator(dashboardHeadingLoc).textContent();
    console.log(`textContent: ${textContent}`);

    let innerText = await page.locator(dashboardHeadingLoc).innerText();
    console.log(`innerText: ${innerText}`);
    expect(innerText).toBe("Secure Area")

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(3 * 1000);
})