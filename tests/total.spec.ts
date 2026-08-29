import { test, expect } from '@playwright/test';
import { DreamTotalPage } from '../pages/DreamTotalPage';

test.describe('Dream Total Page', () => {

    test('should display correct dream statistics', async ({ page }) => {

        const totalPage = new DreamTotalPage(page);

        await totalPage.open();

        const goodDreams =
            await totalPage.getValue('Good Dreams');

        const badDreams =
            await totalPage.getValue('Bad Dreams');

        const totalDreams =
            await totalPage.getValue('Total Dreams');

        const recurringDreams =
            await totalPage.getValue('Recurring Dreams');

        console.log('Good Dreams:', goodDreams);
        console.log('Bad Dreams:', badDreams);
        console.log('Total Dreams:', totalDreams);
        console.log('Recurring Dreams:', recurringDreams);

        expect(goodDreams).toBe('6');
        expect(badDreams).toBe('4');
        expect(totalDreams).toBe('10');
        expect(recurringDreams).toBe('2');

        await page.screenshot({
            path: 'screenshots/dream-total.png',
            fullPage: true
        });
    });

});