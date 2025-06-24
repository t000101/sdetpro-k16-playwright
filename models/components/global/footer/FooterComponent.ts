import { Locator } from "@playwright/test";
import InformationColumnComponent from "./columns/InformationColumnComponent";
import CustomerServiceColumnComponent from "./columns/CustomerSerrviceColumnComponent";
import MyAccountColumnComponent from "./columns/MyAccountColumnComponent";
import FollowUsColumnComponent from "./columns/FollowUsColumnComponent";

export default class FooterComponent {

    public static readonly LOCATOR = '.footer';

    constructor(private component: Locator) { this.component = component; }

    public informationColumnComp(): InformationColumnComponent {
        return new InformationColumnComponent(this.component.locator(InformationColumnComponent.LOCATOR));
    }

    public customerServiceColumnComp(): CustomerServiceColumnComponent {
        return new CustomerServiceColumnComponent(this.component.locator(CustomerServiceColumnComponent.LOCATOR));
    }

    public myAccountColumnComp(): MyAccountColumnComponent {
        return new MyAccountColumnComponent(this.component.locator(MyAccountColumnComponent.LOCATOR));
    }

    public followUsColumnComp(): FollowUsColumnComponent {
        return new FollowUsColumnComponent(this.component.locator(FollowUsColumnComponent.LOCATOR));
    }

    public async powerByText(): Promise<string> {
        return await this.component.locator('.footer-poweredby').innerText();
    }

}