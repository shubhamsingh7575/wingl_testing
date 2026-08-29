import { test, expect } from '@playwright/test';
import { DreamDiaryPage } from '../pages/DreamDiaryPage';

test('Dream diary should contain exactly 10 dreams', async ({ page }) => {

    const diary = new DreamDiaryPage(page);

    await diary.open();

    await expect(diary.rows).toHaveCount(10);
});

test('Dream type should be Good or Bad', async ({ page }) => {

    const diary = new DreamDiaryPage(page);

    await diary.open();

    const rows = diary.rows;

    const count = await rows.count();

    for (let i = 0; i < count; i++) {

        const text = await rows.nth(i).innerText();

        expect(
            text.includes('Good') || text.includes('Bad')
        ).toBeTruthy();
    }
});