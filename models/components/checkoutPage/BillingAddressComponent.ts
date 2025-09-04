import { Locator } from "@playwright/test";

export default class BillingAddressComponent {

    public static readonly LOCATOR = '#opc-billing';
    private firstNameSel = '#BillingNewAddress_FirstName';
    private lastNameSel = '#BillingNewAddress_LastName';
    private email = '#BillingNewAddress_Email';
    private selectCountryDropdownSel = '#BillingNewAddress_CountryId';
    private selectStateDropdownSel = '#BillingNewAddress_StateProvinceId';
    private citySel = '#BillingNewAddress_City';
    private address1Sel = '#BillingNewAddress_Address1';
    private zipCodeSel = '#BillingNewAddress_ZipPostalCode';
    private phoneNumSel = '#BillingNewAddress_PhoneNumber';
    private continueBtnSel = '[onclick="Billing.save()"]';

    constructor(private component: Locator) {
        this.component = component;
    }

    public async inputFirstName(value: string): Promise<void> {
        await this.component.locator(this.firstNameSel).fill(value);
    }

    public async inputLastName(value: string): Promise<void> {
        await this.component.locator(this.lastNameSel).fill(value);
    }

    public async inputEmail(value: string): Promise<void> {
        await this.component.locator(this.email).fill(value);
    }

    public async selectCountry(value: string): Promise<void> {
        await this.component.locator(this.selectCountryDropdownSel).selectOption({label: value});
    }

    public async selectState(value: string): Promise<void> {
        await this.component.locator(this.selectStateDropdownSel).selectOption({label: value});
    }

    public async inputCity(value: string): Promise<void> {
        await this.component.locator(this.citySel).fill(value);
    }

    public async inputAdd1(value: string): Promise<void> {
        await this.component.locator(this.address1Sel).fill(value);
    }

    public async inputZipCode(value: string): Promise<void> {
        await this.component.locator(this.zipCodeSel).fill(value);
    }

    public async inputPhoneNum(value: string): Promise<void> {
        await this.component.locator(this.phoneNumSel).fill(value);
    }

    public async clickOnContinueBtn(value: string): Promise<void> {
        await this.component.locator(this.continueBtnSel).click();
    }
}