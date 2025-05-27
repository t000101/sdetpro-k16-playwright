import { Locator } from "@playwright/test";

export default class FooterColumnComponent {

    protected component: Locator;
    private titleSelector = 'h3';
    private linkSelector = 'li a';

    constructor(component: Locator) {
        this.component = component;
    }

    async getTitleText(): Promise<string> {
        return await this.component.locator(this.titleSelector).innerText();
    }

    async getLinkListt(): Promise<string[]> {
        const linkList = await this.component.locator(this.linkSelector).all();
        return Promise.all(linkList.map(link => link.innerText()));
    }
}