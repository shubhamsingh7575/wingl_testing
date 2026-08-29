import { Page, Locator } from '@playwright/test';

export class DreamDiaryPage {
    constructor(private page: Page) {}

    get rows(): Locator {
        return this.page.locator('#dreamsDiary tbody tr');
    }

    get dreamNames(): Locator {
        return this.page.locator(
            '#dreamsDiary tbody tr td:nth-child(1)'
        );
    }

    get dreamTypes(): Locator {
        return this.page.locator(
            '#dreamsDiary tbody tr td:nth-child(3)'
        );
    }

    async open() {
        await this.page.goto(
            'https://arjitnigam.github.io/myDreams/dreams-diary.html'
        );
    }

    async getDreamNames(): Promise<string[]> {
        return await this.dreamNames.allTextContents();
    }

    async getDreamTypes(): Promise<string[]> {
        return await this.dreamTypes.allTextContents();
    }
}