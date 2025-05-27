import test from "@playwright/test";
import FooterTestFlow from "../../test_flows/global/FooterTestFlow";

test('Verify Footer Component', async ({page}) => {
    const footerTestFlow = new FooterTestFlow(page);
    await footerTestFlow.verifyFooterComp();
})