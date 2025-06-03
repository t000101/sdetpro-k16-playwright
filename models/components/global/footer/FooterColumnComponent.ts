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

    async getTexts(): Promise<string[]> {
        const linkListTexts: string[] = [];
        const linkList = await this.component.locator(this.linkSelector).all();
        for (const link of linkList) {
            const linkText = await link.textContent();
            linkListTexts.push(linkText || '');
        }
        // return Promise.all(linkList.map(link => link.innerText()));
        return linkListTexts;
    }

    async getLinkList(): Promise<string[]> {
        const hrefList: string[] = [];
        const linkList = await this.component.locator(this.linkSelector).all();
        for (const link of linkList) {
            const href = await link.getAttribute('href');
            hrefList.push(href || '');
        }
        return hrefList;
    }
}