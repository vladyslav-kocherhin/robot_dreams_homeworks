import { expect, Locator, Page } from '@playwright/test';

export class JoobleHomePage {
    private readonly page: Page;

    private readonly logo: Locator;
    private readonly jobsSearchOptionInHeader: Locator;
    private readonly qRCodeOptionInHeader: Locator;
    private readonly qRCodeInDropdown: Locator;
    private readonly appStoreIconInDropdown: Locator;
    private readonly googlePlayMarketIconInDropdown: Locator;
    private readonly knowMoreButtonInDropdown: Locator;
    private readonly loginButtonInHeader: Locator;
    private readonly languageSwitcherInHeader: Locator;
    private readonly employerLinkInHeader: Locator;

    private readonly searchField: Locator;
    private readonly locationField: Locator;
    private readonly searchButton: Locator;

    private readonly similarJobs: Locator;
    private readonly dateFilter: Locator;
    private readonly advancedFilter: Locator;
    private readonly searchResults: Locator;
    private readonly telegramSubscribeButton: Locator;
    private readonly viberSubscribeButtonInDropdown: Locator;


    public constructor(page: Page) {
        this.page = page;

        this.logo = page.locator('#logo');
        this.jobsSearchOptionInHeader = page.locator('#jobsSearch');
        this.qRCodeOptionInHeader = page.locator('#dropdownMenu100-3');
        this.qRCodeInDropdown = page.locator('div.qr-code-work.qr-code-work-job.mx-auto');
        this.appStoreIconInDropdown = page.locator('span.glyphicon-app-store-small');
        this.googlePlayMarketIconInDropdown = page.locator('span.glyphicon-google-play-small');
        this.knowMoreButtonInDropdown = page.locator('a.btn.btn-search-outline.w-100.mt-sm.js-click-mobile-app[href="/mobile-app/"]');
        this.loginButtonInHeader = page.locator('#loginIcon');
        this.languageSwitcherInHeader = page.locator('#dropdownMenu100-2');
        this.employerLinkInHeader = page.locator('a.pull-right.no-decoration.text-white.opacity-link.opacity-8.ga-switch-emp[href="/employer/"]');

        this.searchField = page.locator('#search');
        this.locationField = page.locator('input.js-main-region.form-control ');
        this.searchButton = page.locator('#sm-but');

        this.similarJobs = page.locator('p.similar-jobs.flex.flex-align-center');
        this.dateFilter = page.locator('#dropdownMenu2');
        this.advancedFilter = page.locator('#adv-search');
        this.searchResults = page.locator('#pjax-jobs-list');
        this.telegramSubscribeButton = page.locator('#telegramSubscribeBtn');
        this.viberSubscribeButtonInDropdown = page.locator('#viberSubscribeBtn');
    }

    public async open(): Promise<void> {
        await this.page.goto('https://www.work.ua/');
    }

    public async isLogoVisible(): Promise<void> {
        await expect(this.logo).toBeVisible();
    }

    public async isJobsSearchOptionInHeaderVisible(): Promise<void> {
        await expect(this.jobsSearchOptionInHeader).toBeVisible();
    }

    public async isQRcodeOptionInHeaderVisible(): Promise<void> {
        await expect(this.qRCodeOptionInHeader).toBeVisible();
    }

    public async clickOnQRcodeOptionInHeader(): Promise<void> {
        await this.qRCodeOptionInHeader.click();
    }

    public async isQRcodeInDropdownVisible(): Promise<void> {
        await expect(this.qRCodeInDropdown).toBeVisible();
    }

    public async isAppStoreIconInDropdownVisible(): Promise<void> {
        await expect(this.appStoreIconInDropdown).toBeVisible();
    }

    public async isGooglePlayMarketIconInDropdownVisible(): Promise<void> {
        await expect(this.googlePlayMarketIconInDropdown).toBeVisible();
    }

    public async isKnowMoreButtonInDropdownVisible(): Promise<void> {
        await expect(this.knowMoreButtonInDropdown).toBeVisible();
    }

    public async isLoginButtonInHeaderVisible(): Promise<void> {
        await expect(this.loginButtonInHeader).toBeVisible();
    }

    public async isLanguageSwitcherInHeaderVisible(): Promise<void> {
        await expect(this.languageSwitcherInHeader).toBeVisible();
    }

    public async isEmployerLinkInHeaderVisible(): Promise<void> {
        await expect(this.employerLinkInHeader).toBeVisible();
    }

    public async isqRCodeInDropdownVisible(): Promise<void> {
        await expect(this.qRCodeInDropdown).toBeVisible();
    }

    public async isgooglePlayMarketIconInDropdownVisible(): Promise<void> {
        await expect(this.googlePlayMarketIconInDropdown).toBeVisible();
    }

    public async isknowMoreButtonInDropdownVisible(): Promise<void> {
        await expect(this.knowMoreButtonInDropdown).toBeVisible();
    }

    public async isloginButtonInHeaderVisible(): Promise<void> {
        await expect(this.loginButtonInHeader).toBeVisible();
    }

    public async islanguageSwitcherInHeaderVisible(): Promise<void> {
        await expect(this.languageSwitcherInHeader).toBeVisible();
    }

    public async isemployerLinkInHeaderVisible(): Promise<void> {
        await expect(this.employerLinkInHeader).toBeVisible();
    }

    public async searchJob(keyword: string, location: string): Promise<void> {
        await this.searchField.fill(keyword);
        await this.locationField.fill(location);
        await this.searchButton.click();
    }

    public async isSimilarJobsVisible(): Promise<void> {
        await expect(this.similarJobs).toBeVisible();
    }

    public async isDateFilterVisible(): Promise<void> {
        await expect(this.dateFilter).toBeVisible();
    }

    public async isAdvancedFilterVisible(): Promise<void> {
        await expect(this.advancedFilter).toBeVisible();
    }

    public async isSearchResultsVisible(): Promise<void> {
        await expect(this.searchResults).toBeVisible();
    }

    public async isTelegramSubscribeButtonVisible(): Promise<void> {
        await expect(this.telegramSubscribeButton).toBeVisible();
    }

    public async isViberSubscribeButtonInDropdownVisible(): Promise<void> {
        await expect(this.viberSubscribeButtonInDropdown).toBeVisible();
    }

};
