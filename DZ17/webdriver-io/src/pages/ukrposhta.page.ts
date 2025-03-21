import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

class HeaderPage {
    public get logo(): ChainablePromiseElement {
        return $('img[src="./images/site-ua-logo.svg"]');
    }

    public get mainLink(): ChainablePromiseElement {
        return $('a[href*="https://www.ukrposhta.ua/ua"]');
    }

    public get contactTel(): ChainablePromiseElement {
        return $('a[href="tel:0 800 300 545"]');
    }

    public get contactEmail(): ChainablePromiseElement {
        return $('a[href="mailto:ukrposhta@ukrposhta.ua"]');
    }

    public get contactText(): ChainablePromiseElement {
        return $('p*=контакт-центр');
    }

    public get menuPostmark(): ChainablePromiseElement {
        return $('a.main-navbar-link[href="https://postmark.ukrposhta.ua"]');
    }

    public get menuTracking(): ChainablePromiseElement {
        return $('a.main-navbar-link[href="https://track.ukrposhta.ua/tracking_UA.html"]');
    }

    public get menuServices(): ChainablePromiseElement {
        return $('#services-link');
    }

    public get menuTariffs(): ChainablePromiseElement {
        return $('#tariffs-link');
    }

    public get menuOffices(): ChainablePromiseElement {
        return $('a.main-navbar-link[href="https://offices.ukrposhta.ua"]');
    }

    public get menuPhilately(): ChainablePromiseElement {
        return $('#philately-link');
    }

    public get menuCareer(): ChainablePromiseElement {
        return $('a.main-navbar-link[href="https://www.ukrposhta.ua/ua/vacancies/"]');
    }

    public get menuBusiness(): ChainablePromiseElement {
        return $('a.main-navbar-link[href="https://www.ukrposhta.ua/ua/ukrposhta-dlia-biznesu"]');
    }

    public get loginLink(): ChainablePromiseElement {
        return $('a.user-account.col-auto[href="https://ok.ukrposhta.ua/ua/"]');
    }

    public get loginText(): ChainablePromiseElement {
        return $('span.login-text*=Вхід /');
    }

    public get registerLink(): ChainablePromiseElement {
        return $('a.user-account.col-auto[href="https://ok.ukrposhta.ua/ua/register"]');
    }

    public get registerText(): ChainablePromiseElement {
        return $('span.login-text*=Реєстрація');
    }

    public get loginLogo(): ChainablePromiseElement {
        return $('img[src="./images/logo-enter.svg"]');
    }

    public get languageTrigger(): ChainablePromiseElement {
        return $('#language-menu-trigger-header');
    }

    public get englishLanguageOption(): ChainablePromiseElement {
        return $('a[href="/tracking_EN.html"]');
    }

    public async open(): Promise<void> {
        await browser.url('https://track.ukrposhta.ua/');
    }

}

export default new HeaderPage();
