import { Page } from "@playwright/test";

export async function scrollToBottom(page: Page, percentage: number = 1): Promise<void> {
    await page.evaluate((percentage) => {
        window.scrollTo(0, document.body.scrollHeight * 1);
    }, percentage);
}