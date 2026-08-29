import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('My Dreams should open diary and total pages', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.open();
    const pagesBefore = page.context().pages().length;
    await homePage.clickMyDreams();
    await page.waitForTimeout(1000);
    const pagesAfter = page.context().pages();
    console.log('Pages opened:', pagesAfter.length);
    expect(pagesAfter.length).toBe(pagesBefore + 2);
    const urls = pagesAfter.map(p => p.url());
    expect(
        urls.some(url => url.includes('dreams-diary.html'))
    ).toBeTruthy();
    expect(
        urls.some(url => url.includes('dreams-total.html'))
    ).toBeTruthy();
});