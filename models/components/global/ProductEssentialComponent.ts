import { Locator } from "@playwright/test";

export default class ProductEssentialComponent {
    
    protected constructor(protected component: Locator){
        this.component = component;
    }

}