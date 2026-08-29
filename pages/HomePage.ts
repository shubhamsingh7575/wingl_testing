import { Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}

    async open() {
        await this.page.goto(
            'https://arjitnigam.github.io/myDreams/'
        );
    }
    async waitForLoader() {
        await this.page.locator('.loader').waitFor({
            state: 'visible'
        });

        await this.page.locator('.loader').waitFor({
            state: 'hidden',
            timeout: 5000
        });
    }
    async clickMyDreams() {
        return await this.page.locator('text=My Dreams').click();
    }
}