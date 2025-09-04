import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import BillingAddressComponent from "../components/checkoutPage/BillingAddressComponent";
import ShippingAddressComponent from "../components/checkoutPage/ShippingAddressComponent";
import ShippingMethodComponent from "../components/checkoutPage/ShippingMethodComponent";
import ConfirmOrderComponent from "../components/checkoutPage/ConfirmOrderComponent";
import PaymentInformationComponent from "../components/checkoutPage/PaymentInformationComponent";
import PaymentMethodComponent from "../components/checkoutPage/PaymentMethodComponent";

export default class CheckOutPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public billingAddressComponent(): BillingAddressComponent {
        return new BillingAddressComponent(this.page.locator(BillingAddressComponent.LOCATOR));
    }

    public shippingAddressComponent(): ShippingAddressComponent {
        return new ShippingAddressComponent(this.page.locator(ShippingAddressComponent.LOCATOR));
    }

    public shippingMethodComponent(): ShippingMethodComponent {
        return new ShippingMethodComponent(this.page.locator(ShippingMethodComponent.LOCATOR));
    }

    public paymentMethodComponent(): PaymentMethodComponent {
        return new PaymentMethodComponent(this.page.locator(PaymentMethodComponent.LOCATOR));
    }

    public paymentInformationComponent(): PaymentInformationComponent {
        return new PaymentInformationComponent(this.page.locator(PaymentInformationComponent.LOCATOR));
    }

    public confirmOrderComponent(): ConfirmOrderComponent {
        return new ConfirmOrderComponent(this.page.locator(ConfirmOrderComponent.LOCATOR));
    }

}