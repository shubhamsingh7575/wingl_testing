import { Page, Locator } from '@playwright/test';

export class DreamTotalPage {
    constructor(private page: Page) {}

    get rows(): Locator {
        return this.page.locator('tbody tr');
    }

    async open() {
        await this.page.goto(
            'https://arjitnigam.github.io/myDreams/dreams-total.html'
        );
    }

    async getValue(label: string): Promise<string> {
        const row = this.page
            .locator('tbody tr')
            .filter({ hasText: label });

        return (await row.locator('td').nth(1).innerText()).trim();
    }
}