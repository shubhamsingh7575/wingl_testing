import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Dream Portal Home Page', () => {

    test('loading spinner should appear and disappear', async ({ page }) => {

        const homePage = new HomePage(page);

        await homePage.open();

        await homePage.waitForLoading();

        await expect(homePage.dreamButton).toBeVisible();

        await page.screenshot({
            path: 'screenshots/home-page.png',
            fullPage: true
        });
    });


    test('My Dreams should open Diary and Total pages', async ({ page }) => {

        const homePage = new HomePage(page);

        await homePage.open();

        await homePage.waitForLoading();

        const context = page.context();

        const initialPageCount = context.pages().length;

        console.log('Initial pages:', initialPageCount);

        await homePage.clickMyDreams();

        // Wait for new tabs/windows
        await page.waitForTimeout(1000);

        const pages = context.pages();

        console.log('Pages after clicking:', pages.length);

        // Home + Diary + Total
        expect(pages.length).toBe(initialPageCount + 2);

        const urls = pages.map(p => p.url());

        console.log('Opened URLs:', urls);

        expect(
            urls.some(url => url.includes('dreams-diary.html'))
        ).toBeTruthy();

        expect(
            urls.some(url => url.includes('dreams-total.html'))
        ).toBeTruthy();
        // Screenshot of home after click
        await page.screenshot({
            path: 'screenshots/my-dreams-click.png',
            fullPage: true
        });
    });

});