import { Page } from '@playwright/test';

export class DreamTotalPage {
    constructor(private page: Page) {}
    async open() {
        await this.page.goto(
            'https://arjitnigam.github.io/myDreams/dreams-total.html'
        );
    }
}