import { expect, Page } from "@playwright/test";
import { ComputerDataType } from "../../test_data/computer/ComputerDataType";
import { ComputerDetailsPage } from "../../models/pages/ComputerDetailsPage";
import ShoppingCartPage from "../../models/pages/ShoppingCartPage";
import CheckOutOptionPage from "../../models/pages/CheckOutOptionPage";
import defautCheckoutUser from "../../test_data/DefaultCheckoutUser.json";
import CheckOutPage from "../../models/pages/CheckOutPage";

export class OrderComputerFlow {
    private totalPrice: number = 0;

    constructor(private page: Page, private computerData: ComputerDataType) {
        this.page = page;
        this.computerData = computerData;
    }

    /** This is a step
     * 1. A test step in a flow should not go over more than one page/screen
     * 2. If a page contains many individual part, we can split them up
     */
    async buildComputerSpecAndAddToCart() {
        const computerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComponent = computerDetailsPage.computerComp(this.computerData.computerCompClass);

        // Unseclect all default options
        await computerComponent.unselectAllOptions();

        // Build computer spec base on test data
        const { processorType, hdd, ram, software, os, quantity } = this.computerData;
        const processorAdditionalPrice = this.getAditionalPrice(await computerComponent.selectProcessor(processorType));
        const ramAdditionalPrice = this.getAditionalPrice(await computerComponent.selectRAM(ram));
        const hddAdditionalPrice = this.getAditionalPrice(await computerComponent.selectHDD(hdd));
        const softwareAdditionalPrice = this.getAditionalPrice(await computerComponent.selectSoftware(software));
        let osAdditionalPrice = 0;
        if (os) {
            osAdditionalPrice = this.getAditionalPrice(await computerComponent.selectOs(os));
        }

        if (quantity) {
            await computerComponent.inputQuantity(quantity)
        }

        const basePrice = await computerComponent.getBasePrice();
        const additionalPrice = processorAdditionalPrice + ramAdditionalPrice + hddAdditionalPrice + osAdditionalPrice + softwareAdditionalPrice;
        this.totalPrice = (basePrice + additionalPrice) * (quantity ? quantity : 1);

        // Add to cart and wait for event
        const requestSlug = await computerComponent.clickOnAddToCartBtn();
        await this.page.waitForResponse(requestSlug);

        // Navigate to shoppingCart page
        await computerDetailsPage.headerComponent().clickOnShoppingCartLink();
    }


    public async verifyShoppingCart() {
        const shoppingCartPage = new ShoppingCartPage(this.page);
        const totalsComponent = shoppingCartPage.totalsComponent();
        const cartItemRowComponentList = await shoppingCartPage.cartItemRowComponentList();

        // Verifying all shopping item rows
        expect(cartItemRowComponentList.length).toBeGreaterThan(0);
        let cartItemRowsSubtotal = 0;
        for (const cartItemRow of cartItemRowComponentList) {
            const unitPrice = await cartItemRow.unitPrice();
            const quantity = await cartItemRow.quantity();
            const subTotal = await cartItemRow.subTotal();
            cartItemRowsSubtotal += subTotal;
            expect(unitPrice * quantity).toBe(subTotal);
        }

        // Verifying totals component
        const priceCategories = await totalsComponent.priceCategories();
        const subTotal = priceCategories["Sub-Total:"];
        const shippingFee = priceCategories["Shipping:"];
        const tax = priceCategories["Tax:"];
        const total = priceCategories["Total:"];
        expect(subTotal).toBe(cartItemRowsSubtotal);
        expect(total).toBe(subTotal + shippingFee + tax);

        console.log(`priceCategories: ${JSON.stringify(priceCategories)}`);
    }

    public async agreeTosAndCheckout() {
        const shoppingCartPage = new ShoppingCartPage(this.page);
        const totalsComponent = shoppingCartPage.totalsComponent();
        await totalsComponent.acceptTos();
        await totalsComponent.clickOnCheckoutBtn();
        await new CheckOutOptionPage(this.page).clickOnCheckOutAsGuestBtn();
    }
    
    public async inputBillingAddress() {
        const { firstName,
            lastName,
            email,
            country,
            state,
            city,
            add1,
            zipCode,
            phoneNum
        } = defautCheckoutUser;
        
        const checkoutPage = new CheckOutPage(this.page);
        const billingAddressComponent = checkoutPage.billingAddressComponent();
        await billingAddressComponent.inputFirstName(firstName);
        await billingAddressComponent.inputLastName(lastName);
        await billingAddressComponent.inputEmail(email);
        await billingAddressComponent.selectCountry(country);
        await billingAddressComponent.selectState(state);
        await billingAddressComponent.inputCity(city);
        await billingAddressComponent.inputAdd1(add1);
        await billingAddressComponent.inputZipCode(zipCode);
        await billingAddressComponent.inputPhoneNum(phoneNum);
        await billingAddressComponent.clickOnContinueBtn();
        throw new Error('Show case to handle new opened');
    }

    private getAditionalPrice(optionFullText: string | null): number {
        if (optionFullText === null) {
            optionFullText = '';
        }
        const regex = /\+\d+\.\d+/g;
        const matches = optionFullText.match(regex);

        if (matches) {
            return Number(matches[0].replace('+', '').trim());
        }

        return 0;
    }
}