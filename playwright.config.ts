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
        baseURL: 'https://playwright.dev/',
    }
})