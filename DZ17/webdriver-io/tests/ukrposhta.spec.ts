import { browser, expect } from '@wdio/globals';
import HeaderPage from '../src/pages/ukrposhta.page';

describe('Ukrposhta Header Tests', () => {

    before(async () => {
        await HeaderPage.open();
    });

    it('should verify header contains all elements', async () => {

        //Перевірка відображення головного лого

        await expect(HeaderPage.logo).toBeDisplayed();
        await expect(HeaderPage.logo).toHaveAttribute('src', './images/site-ua-logo.svg');

        await expect(HeaderPage.mainLink).toBeDisplayed();
        await expect(HeaderPage.mainLink).toHaveHref('https://www.ukrposhta.ua/ua');

        //Перевірка відображення контактних даних служби підтримки

        await expect(HeaderPage.contactTel).toBeDisplayed();
        await expect(HeaderPage.contactTel).toHaveHref('tel:0 800 300 545');
        await expect(HeaderPage.contactTel).toHaveText('0 800 300 545');

        await expect(HeaderPage.contactEmail).toBeDisplayed();
        await expect(HeaderPage.contactEmail).toHaveHref('mailto:ukrposhta@ukrposhta.ua');
        await expect(HeaderPage.contactEmail).toHaveText('ukrposhta@ukrposhta.ua');

        await expect(HeaderPage.contactText).toBeDisplayed();

        //Перевірка відображення опцій меню

        await expect(HeaderPage.menuPostmark).toBeDisplayed();
        await expect(HeaderPage.menuTracking).toBeDisplayed();
        await expect(HeaderPage.menuServices).toBeDisplayed();
        await expect(HeaderPage.menuTariffs).toBeDisplayed();
        await expect(HeaderPage.menuOffices).toBeDisplayed();
        await expect(HeaderPage.menuPhilately).toBeDisplayed();
        await expect(HeaderPage.menuCareer).toBeDisplayed();
        await expect(HeaderPage.menuBusiness).toBeDisplayed();

        //Перевірка відображення посилання на форму логіну/реєстрації

        await expect(HeaderPage.loginLink).toBeDisplayed();
        await expect(HeaderPage.loginText).toBeDisplayed();
        await expect(HeaderPage.registerLink).toBeDisplayed();
        await expect(HeaderPage.registerText).toBeDisplayed();
        await expect(HeaderPage.loginLogo).toBeDisplayed();

        //Перевірка відображення вибору мови

        await expect(HeaderPage.languageTrigger).toBeDisplayed();
        await HeaderPage.languageTrigger.click();
        await expect(HeaderPage.englishLanguageOption).toBeDisplayed();
    });

    it('should verify "Back to top" button functionality', async () => {
        await browser.url('https://track.ukrposhta.ua/');
        const scrollTopBtn = await browser.$('button#scrollTopBtn');
        const cookieAcceptBtn = await browser.$('input#masseg_cookie');

        await expect(scrollTopBtn).not.toBeDisplayed();
        await cookieAcceptBtn.click();

        await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
        await expect(scrollTopBtn).toBeDisplayed();

        await scrollTopBtn.click();
        await browser.pause(1000);

        const scrollPosition = await browser.execute(() => window.scrollY);
        expect(scrollPosition).toEqual(0);

        await expect(scrollTopBtn).not.toBeDisplayed();
    });
});
