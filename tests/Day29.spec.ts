import { expect, Page, test } from '@playwright/test';
import { getAdvertisingParams } from '../utils/AdUtils';
import { scrollToBottom } from '../utils/PageUtils';

test.describe('Handle JS Alert', () => {
    test('Handle JS Alert', async ({ page }) => {
        await page.goto('/javascript_alerts');
        const jsAlertLoc = page.locator('button[onclick="jsAlert()"]');

        // Must define event handler
        page.on('dialog', async (dialog) => {
            await dialog.accept();
        })

        // Trigger the JS alert
        await jsAlertLoc.click();
        await page.waitForTimeout(3 * 1000);
    })

    test('Handle JS Confirm', async ({ page }) => {
        await page.goto('/javascript_alerts');
        const jsConfirmLoc = page.locator('button[onclick="jsConfirm()"]');

        // Must define event handler
        page.on('dialog', async (dialog) => {
            await dialog.dismiss();
        })

        // Trigger the JS alert
        await jsConfirmLoc.click();
        await page.waitForTimeout(3 * 1000);
    })

    test('Handle JS Prompt', async ({ page }) => {
        await page.goto('/javascript_alerts');
        const jsPromptLoc = page.locator('button[onclick="jsPrompt()"]');
        const resultLoc = page.locator('#result');

        // Must define event handler
        page.on('dialog', async (dialog) => {
            await dialog.accept("Tui ten la!");
        })

        // Trigger the JS alert
        await jsPromptLoc.click();
        await page.waitForTimeout(3 * 1000);

        // Get the result text
        const resultText = await resultLoc.innerText();
        console.log(resultText);
    })
})

test.describe('Execute JS snippet', () => {
    test('Execute without params', async ({ page }) => {
        await page.goto('/floating_menu');
        await scrollToBottom(page);

        // DEBUG PURPOSE ONLY
        await page.waitForTimeout(3 * 1000);
    })

    test('Execute wwith params and get return values', async ({ page }) => {
        await page.goto('https://www.foodandwine.com/');
        const adId = "leaderboard-flex-1";
        const leaderBoardFlexLoc = `#${adId}`;
        // Scroll down a little
        await scrollToBottom(page, 0.1);
        // Click on any blank area
        await page.mouse.click(0, 0);
        // Scroll up again
        await page.mouse.wheel(0, -100);
        await page.waitForSelector(leaderBoardFlexLoc, { timeout: 10 * 1000 });
        await scrollToBottom(page);
        const adParams = await getAdvertisingParams(page, adId);
        console.log(JSON.stringify(adParams));
        expect(adParams.docId[0]).toBe('6361217');

        // DEBUG PURPOSE ONLY
        await page.waitForTimeout(3 * 1000);
    })
})

