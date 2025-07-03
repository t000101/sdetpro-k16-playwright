import { Locator, Page } from '@playwright/test';
import BasePage from './BasePage';
import { ComputerEssentialComponent } from '../components/computer/ComputerEssentialComponent';

/**
 * - Tạo ra một 'ông thợ', để tạo mộ đối tượng từ một cái 'khuôn'.
 * - $: Kĩ thuật: "intersection type" trong typescript
 */
export type ComputerComponentConstructor<Teo extends ComputerEssentialComponent> = 
(new (componentClass: Locator) => Teo);

export class ComputerDetailsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    /**
     * Có nhiều loại Computer Components: Standard, Cheap and Expensive.
     * Chúng ta yêu cầu đưa vào một cái "khuôn", khi nào khởi tạo là tùy chúng ta.
     */

    computerComp<Teo extends ComputerEssentialComponent>(computerCompClass: ComputerComponentConstructor<Teo>): Teo {
        return new computerCompClass(this.page.locator(computerCompClass.selectorValue));
    }
}