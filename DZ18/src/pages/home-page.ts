import { Locator, Page } from '@playwright/test';

export class HomePage {
    public constructor(private readonly page: Page) {}

    public async open(): Promise<void> {
        await this.page.goto('https://www.work.ua/');
    }

    public get logo(): Locator {
        return this.page.locator('#logo');
    }

    public get jobsSearchOptionInHeader(): Locator {
        return this.page.locator('#jobsSearch');
    }

    public get qRCodeOptionInHeader(): Locator {
        return this.page.locator('#dropdownMenu100-3');
    }

    public get qRCodeInDropdown(): Locator {
        return this.page.locator('div.qr-code-work.qr-code-work-job.mx-auto');
    }

    public get appStoreIconInDropdown(): Locator {
        return this.page.locator('span.glyphicon-app-store-small');
    }

    public get googlePlayMarketIconInDropdown(): Locator {
        return this.page.locator('span.glyphicon-google-play-small');
    }

    public get knowMoreButtonInDropdown(): Locator {
        return this.page.locator('a.btn.btn-search-outline.w-100.mt-sm.js-click-mobile-app[href="/mobile-app/"]');
    }

    public get loginButtonInHeader(): Locator {
        return this.page.locator('#loginIcon');
    }

    public get languageSwitcherInHeader(): Locator {
        return this.page.locator('#dropdownMenu100-2');
    }

    public get employerLinkInHeader(): Locator {
        return this.page.locator('a.pull-right.no-decoration.text-white.opacity-link.opacity-8.ga-switch-emp[href="/employer/"]');
    }

    public get searchField(): Locator {
        return this.page.locator('#search');
    }

    public get locationField(): Locator {
        return this.page.locator('input.js-main-region.form-control');
    }

    public get searchButton(): Locator {
        return this.page.locator('#sm-but');
    }

    public async searchJob(keyword: string, location: string): Promise<void> {
        await this.searchField.fill(keyword);
        await this.locationField.fill(location);
        await this.searchButton.click();
    }

    public async clickOnQRcodeOptionInHeader(): Promise<void> {
        await this.qRCodeOptionInHeader.click();
    }

}
