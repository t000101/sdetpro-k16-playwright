import { Locator } from "@playwright/test";

export default class FooterComponent {
    static powerByText() {
        throw new Error("Method not implemented.");
    }

    public static readonly LOCATOR = '.footer';

    constructor(private component: Locator) { this.component = component; }

    public async powerByText (): Promise<string> {
        return await this.component.locator('.footer-poweredby').innerText();
    }

}