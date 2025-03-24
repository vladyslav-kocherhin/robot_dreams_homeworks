import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';
import { expect } from '@wdio/globals';

class BasePage {

    public static async open(): Promise<void> {
        await browser.url('https://track.ukrposhta.ua/');
    }

    public static get scrollToTopButton(): ChainablePromiseElement {
        return $('button#scrollTopBtn');
    }

    public static async acceptAllCookies(): Promise<void> {
        const cookieAcceptBtn = await browser.$('input#masseg_cookie');
        await cookieAcceptBtn.click();
    }

    public static async scrollAllWayDown(): Promise<void> {
        await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
    }

    public static async scrollToTopButtonWorksCorrectly(): Promise<void> {
        await expect(BasePage.scrollToTopButton).not.toBeDisplayed();
        await BasePage.scrollAllWayDown();
        await BasePage.acceptAllCookies();
        await expect(BasePage.scrollToTopButton).toBeDisplayed();
        await BasePage.scrollToTopButton.click();
        await expect(BasePage.scrollToTopButton).not.toBeDisplayed();
    }

}

export { BasePage };
