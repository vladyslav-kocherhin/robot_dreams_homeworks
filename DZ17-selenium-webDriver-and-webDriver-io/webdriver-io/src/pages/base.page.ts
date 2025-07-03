import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

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

}

export { BasePage };
