import { Page } from "@playwright/test";
import FooterColumnComponent from "../../models/components/global/footer/FooterColumnComponent";
import FooterComponent from "../../models/components/global/footer/FooterComponent";
import HomePage from "../../models/pages/HomePage";

export default class FooterTestFlow {

    constructor(private page: Page) { this.page = page; }

    async verifyFooterComp() {
        const homePage = new HomePage(this.page);
        const footerComponent = homePage.footerComponent();
        await this.verifyInformationColumnComponent(footerComponent);
        await this.verifyCustomerServiceColumnComponent(footerComponent);
        // await this.verifyMyAccountColumnComponent();
        // await this.verifyFollowUsColumnComponent();
    }

    async verifyInformationColumnComponent(footerComponent: FooterComponent) {
        const informationColumnComp = footerComponent.informationColumnComp();
        const extectedTexts = ['Sitemap', 'Shipping & Returns', 'Privacy Notice', 'Condition of Use', 'About us', 'Contact us'];
        const expectedHrefs = ['/sitemap', '/shipping-returns', '/privacy-policy', '/conditions-of-use', '/about-us', '/contactus'];

        await this.verifyFooterColumnComponent(informationColumnComp, extectedTexts, expectedHrefs);
    }

    async verifyCustomerServiceColumnComponent(footerComponent: FooterComponent) {
        const customerServiceColumnComp = footerComponent.customerServiceColumnComp();
        const extectedTexts = ['Search', 'News', 'Blog', 'Recently viewed products', 'Compare products list', 'New products'];
        const expectedHrefs = ['/search', '/news', '/blog', '/recentlyviewedproducts', '/compareproducts', '/newproducts'];

        await this.verifyFooterColumnComponent(customerServiceColumnComp, extectedTexts, expectedHrefs);
    }

    private async verifyFooterColumnComponent(
        FooterColumnComponent: FooterColumnComponent,
        extectedTexts: string[],
        expectedHrefs: string[]) {
            
    }

}