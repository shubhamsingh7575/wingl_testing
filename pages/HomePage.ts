import { Page, expect } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}

    get spinner() {
        return this.page.locator('.spinner');
    }

    get dreamButton() {
        return this.page.locator('#dreamButton');
    }

    async open() {
        await this.page.goto(
            'https://arjitnigam.github.io/myDreams/'
        );
    }

    async waitForLoading() {
        // Spinner should appear
        await expect(this.spinner).toBeVisible();

        // Spinner should disappear
        await expect(this.spinner).toBeHidden({
            timeout: 5000
        });
    }

    async clickMyDreams() {
        await this.dreamButton.click();
    }
}