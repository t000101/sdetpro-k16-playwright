import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: './tests',
    projects: [
        {
            name: 'Chromium',
            use: {...devices['Desktop Chrome']}
        }
    ],
    use: {
        headless: false,
        baseURL: 'https://demowebshop.tricentis.com/',
        actionTimeout: 5 * 1000,
    }
})