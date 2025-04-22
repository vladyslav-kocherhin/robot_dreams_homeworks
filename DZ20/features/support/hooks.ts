import { Before, After } from '@cucumber/cucumber';
import { Browser, chromium } from 'playwright';
import { CustomWorld } from './world';

let browser: Browser;

Before(async function (this: CustomWorld) {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();

    await this.page.goto('https://www.work.ua/');
});

After(async function () {
    await browser.close();
});
