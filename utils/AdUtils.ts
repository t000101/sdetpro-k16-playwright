import { Page } from "@playwright/test";

export async function getAdvertisingParams(page: Page, adSlotId: String): Promise<any> {
    // Ussing binding to provide arg for the callback function
    return await page.evaluate(adSlotId => {
        const slot = googletag.pubads().getSlots().find(({ getSlotElementId }) => getSlotElementId() === "leaderboard-flex-1");
        return slot.getTargetingMap();
    }, adSlotId);

}