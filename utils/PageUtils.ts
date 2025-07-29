import { Page } from "@playwright/test";

export async function scrollToTop(page: Page): Promise<void> {
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    });
}

export async function scrollToBottom(page: Page, percentage: number = 1): Promise<void> {
    await page.evaluate((percentage) => {
        window.scrollTo(0, document.body.scrollHeight * percentage);
    }, percentage);
}