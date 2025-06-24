import { expect, Page } from "@playwright/test";
import FooterColumnComponent from "../../models/components/global/footer/columns/FooterColumnComponent";
import FooterComponent from "../../models/components/global/footer/FooterComponent";
import HomePage from "../../models/pages/HomePage";
import { deepStrictEqual } from 'assert';

export default class FooterTestFlow {

    constructor(private page: Page) { this.page = page; }

    async verifyFooterComp() {
        const homePage = new HomePage(this.page);
        const footerComponent = homePage.footerComponent();
        await this.verifyInformationColumnComponent(footerComponent);
        await this.verifyCustomerServiceColumnComponent(footerComponent);
        await this.verifyMyAccountColumnComponent(footerComponent);
        await this.verifyFollowUsColumnComponent(footerComponent);
    }

    async verifyInformationColumnComponent(footerComponent: FooterComponent) {
        const informationColumnComp = footerComponent.informationColumnComp();
        const extectedTexts = ['Sitemap', 'Shipping & Returns', 'Privacy Notice', 'Conditions of Use', 'About us', 'Contact us'];
        const expectedHrefs = ['/sitemap', '/shipping-returns', '/privacy-policy', '/conditions-of-use', '/about-us', '/contactus'];

        await this.verifyFooterColumnComponent(informationColumnComp, extectedTexts, expectedHrefs);
    }

    async verifyCustomerServiceColumnComponent(footerComponent: FooterComponent) {
        const customerServiceColumnComp = footerComponent.customerServiceColumnComp();
        const extectedTexts = ['Search', 'News', 'Blog', 'Recently viewed products', 'Compare products list', 'New products'];
        const expectedHrefs = ['/search', '/news', '/blog', '/recentlyviewedproducts', '/compareproducts', '/newproducts'];

        await this.verifyFooterColumnComponent(customerServiceColumnComp, extectedTexts, expectedHrefs);
    }

    async verifyMyAccountColumnComponent(footerComponent: FooterComponent) {
        const myAccountColumnComp = footerComponent.myAccountColumnComp();
        const extectedTexts = ['My account', 'Orders', 'Addresses', 'Shopping cart', 'Wishlist'];
        const expectedHrefs = ['/customer/info', '/customer/orders', '/customer/addresses', '/cart', '/wishlist'];

        await this.verifyFooterColumnComponent(myAccountColumnComp, extectedTexts, expectedHrefs);
    }

    async verifyFollowUsColumnComponent(footerComponent: FooterComponent) {
        const followUsColumnComp = footerComponent.followUsColumnComp();
        const extectedTexts = ['Facebook', 'Twitter', 'RSS', 'YouTube', 'Google+'];
        const expectedHrefs = ['http://www.facebook.com/nopCommerce', 'https://twitter.com/nopCommerce', '/news/rss/1', 'http://www.youtube.com/user/nopCommerce', 'https://plus.google.com/+nopcommerce'];

        await this.verifyFooterColumnComponent(followUsColumnComp, extectedTexts, expectedHrefs);
    }

    private async verifyFooterColumnComponent(
        footerColumnComponent: FooterColumnComponent,
        extectedTexts: string[],
        expectedHrefs: string[]) {

        const actualText: string[] = await footerColumnComponent.getTexts();
        const actualHrefs: string[] = await footerColumnComponent.getLinkList();

        expect(actualText).toStrictEqual(extectedTexts);
        expect(actualHrefs).toStrictEqual(expectedHrefs)

        // deepStrictEqual(actualText, extectedTexts, 
        //     `Actual link text and expected linktexts is not the same
        //     Actual: ${actualText}
        //     Expected: ${extectedTexts}`
        // )
    }

}