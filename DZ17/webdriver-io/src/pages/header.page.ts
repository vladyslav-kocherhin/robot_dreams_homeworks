import { $ } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';
import { expect } from '@wdio/globals';

class HeaderPage {
    public static get logo(): ChainablePromiseElement {
        return $('img[src="./images/site-ua-logo.svg"]');
    }

    public static get mainLink(): ChainablePromiseElement {
        return $('a[href*="https://www.ukrposhta.ua/ua"]');
    }

    public static get contactTel(): ChainablePromiseElement {
        return $('a[href="tel:0 800 300 545"]');
    }

    public static get contactEmail(): ChainablePromiseElement {
        return $('a[href="mailto:ukrposhta@ukrposhta.ua"]');
    }

    public static get contactText(): ChainablePromiseElement {
        return $('p*=контакт-центр');
    }

    public static get menuPostmark(): ChainablePromiseElement {
        return $('a.main-navbar-link[href="https://postmark.ukrposhta.ua"]');
    }

    public static get menuTracking(): ChainablePromiseElement {
        return $('a.main-navbar-link[href="https://track.ukrposhta.ua/tracking_UA.html"]');
    }

    public static get menuServices(): ChainablePromiseElement {
        return $('#services-link');
    }

    public static get menuTariffs(): ChainablePromiseElement {
        return $('#tariffs-link');
    }

    public static get menuOffices(): ChainablePromiseElement {
        return $('a.main-navbar-link[href="https://offices.ukrposhta.ua"]');
    }

    public static get menuPhilately(): ChainablePromiseElement {
        return $('#philately-link');
    }

    public static get menuCareer(): ChainablePromiseElement {
        return $('a.main-navbar-link[href="https://www.ukrposhta.ua/ua/vacancies/"]');
    }

    public static get menuBusiness(): ChainablePromiseElement {
        return $('a.main-navbar-link[href="https://www.ukrposhta.ua/ua/ukrposhta-dlia-biznesu"]');
    }

    public static get loginLink(): ChainablePromiseElement {
        return $('a.user-account.col-auto[href="https://ok.ukrposhta.ua/ua/"]');
    }

    public static get loginText(): ChainablePromiseElement {
        return $('span.login-text*=Вхід /');
    }

    public static get registerLink(): ChainablePromiseElement {
        return $('a.user-account.col-auto[href="https://ok.ukrposhta.ua/ua/register"]');
    }

    public static get registerText(): ChainablePromiseElement {
        return $('span.login-text*=Реєстрація');
    }

    public static get loginLogo(): ChainablePromiseElement {
        return $('img[src="./images/logo-enter.svg"]');
    }

    public static get languageTrigger(): ChainablePromiseElement {
        return $('#language-menu-trigger-header');
    }

    public static async expectMainLogoToBeVisiable(): Promise<void> {
        await expect(this.logo).toBeDisplayed();
        await expect(this.logo).toHaveAttribute('src', './images/site-ua-logo.svg');
        await expect(this.mainLink).toBeDisplayed();
        await expect(this.mainLink).toHaveHref('https://www.ukrposhta.ua/ua');
    }

    public static async expectContactInformationToBeVisible(): Promise<void> {
        await expect(this.contactTel).toBeDisplayed();
        await expect(this.contactTel).toHaveHref('tel:0 800 300 545');
        await expect(this.contactTel).toHaveText('0 800 300 545');

        await expect(this.contactEmail).toBeDisplayed();
        await expect(this.contactEmail).toHaveHref('mailto:ukrposhta@ukrposhta.ua');
        await expect(this.contactEmail).toHaveText('ukrposhta@ukrposhta.ua');

        await expect(this.contactText).toBeDisplayed();
    }

    public static async expectMenuOptionsToBeVisiable(): Promise<void> {
        await expect(this.menuPostmark).toBeDisplayed();
        await expect(this.menuTracking).toBeDisplayed();
        await expect(this.menuServices).toBeDisplayed();
        await expect(this.menuTariffs).toBeDisplayed();
        await expect(this.menuOffices).toBeDisplayed();
        await expect(this.menuPhilately).toBeDisplayed();
        await expect(this.menuCareer).toBeDisplayed();
        await expect(this.menuBusiness).toBeDisplayed();
    }

    public static async expectLoginAndRegistrationLinksToBeVisible(): Promise<void> {
        await expect(this.loginLink).toBeDisplayed();
        await expect(this.loginText).toBeDisplayed();
        await expect(this.registerLink).toBeDisplayed();
        await expect(this.registerText).toBeDisplayed();
        await expect(this.loginLogo).toBeDisplayed();
    }

    public static async expectLanguageSwitcherToBeVisible(): Promise<void> {
        await expect(this.languageTrigger).toBeDisplayed();
    }

}

export { HeaderPage };
