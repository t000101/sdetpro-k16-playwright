import { Page } from "@playwright/test";

export default class HeaderTestFlow {
    
    constructor(private page: Page) { this.page = page; }

    verifyHeaderComp() {
        throw new Error("Method not implemented.");
    }

}