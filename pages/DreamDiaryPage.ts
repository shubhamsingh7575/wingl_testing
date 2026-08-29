import { Page, Locator } from '@playwright/test';

export class DreamDiaryPage {
    constructor(private page: Page) {}

    get rows(): Locator {
        return this.page.locator('table tbody tr');
    }

    async open() {
        await this.page.goto(
            'https://arjitnigam.github.io/myDreams/dreams-diary.html'
        );
    }
}