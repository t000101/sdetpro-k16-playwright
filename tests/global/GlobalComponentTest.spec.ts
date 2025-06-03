import test from "@playwright/test";
import FooterTestFlow from "../../test_flows/global/FooterTestFlow";
import HeaderTestFlow from "../../test_flows/global/HeaderTestFlow";

// Data Driven
// Is a concept to reuse/loop over a suite of test data for a test logic
const PAGES = [
    { pageName: 'Home Page', slug: '/' },
    { pageName: 'Login Page', slug: '/login' },
    { pageName: 'Register Page', slug: '/register' },
];

PAGES.forEach(page => {
    const { pageName, slug } = page;
    test(`Verify Footer Component on ${pageName}`, async ({ page }) => {
        await page.goto(slug);
        const footerTestFlow = new FooterTestFlow(page);
        await footerTestFlow.verifyFooterComp();
    })

    test(`Verify Header Component on ${pageName}`, async ({ page }) => {
        await page.goto(slug);
        const footerTestFlow = new HeaderTestFlow(page);
        await footerTestFlow.verifyHeaderComp();
    })
})
