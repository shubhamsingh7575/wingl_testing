import { test, expect } from '@playwright/test';
import { DreamDiaryPage } from '../pages/DreamDiaryPage';

test.describe('Dream Diary Tests', () => {

    test('should contain exactly 10 dream entries', async ({ page }) => {

        const diary = new DreamDiaryPage(page);

        await diary.open();

        await expect(diary.rows).toHaveCount(10);

        await page.screenshot({
            path: 'screenshots/dream-diary.png',
            fullPage: true
        });
    });


    test('every dream row should have exactly 3 filled columns', async ({ page }) => {

        const diary = new DreamDiaryPage(page);

        await diary.open();

        const rowCount = await diary.rows.count();

        expect(rowCount).toBe(10);

        for (let i = 0; i < rowCount; i++) {

            const cells = diary.rows.nth(i).locator('td');

            // Each row must have 3 columns
            await expect(cells).toHaveCount(3);

            for (let j = 0; j < 3; j++) {

                const text = await cells.nth(j).innerText();

                expect(text.trim()).not.toBe('');
            }
        }
    });


    test('dream type should only be Good or Bad', async ({ page }) => {

        const diary = new DreamDiaryPage(page);

        await diary.open();

        const types = await diary.getDreamTypes();

        expect(types).toHaveLength(10);

        for (const type of types) {

            expect(['Good', 'Bad']).toContain(type.trim());
        }
    });


    test('should correctly identify recurring dreams', async ({ page }) => {

        const diary = new DreamDiaryPage(page);

        await diary.open();

        const names = await diary.getDreamNames();

        const frequency: Record<string, number> = {};

        for (const name of names) {

            const dreamName = name.trim();

            frequency[dreamName] =
                (frequency[dreamName] || 0) + 1;
        }

        const recurringDreams = Object.entries(frequency)
            .filter(([_, count]) => count > 1)
            .map(([name]) => name);

        console.log('Recurring dreams:', recurringDreams);

        expect(recurringDreams).toHaveLength(2);

        expect(recurringDreams).toContain(
            'Flying over mountains'
        );

        expect(recurringDreams).toContain(
            'Lost in maze'
        );
    });

});