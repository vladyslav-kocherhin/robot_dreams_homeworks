import { Given, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../../src/pages/home-page';
//import { SearchResultsPage } from '../../src/pages/search-results-page';
import { CustomWorld } from '../support/world';

let homePage: HomePage;
//let searchResultsPage: SearchResultsPage;

Given<CustomWorld>('I open home page Work.ua', async function () {
    await this.page.goto('https://www.work.ua/');
    homePage = new HomePage(this.page);
    //searchResultsPage = new SearchResultsPage(this.page);
});

Then<CustomWorld>('All header elements should be visible', async function () {
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.jobsSearchOptionInHeader).toBeVisible();
    await expect(homePage.qRCodeOptionInHeader).toBeVisible();
    await homePage.clickOnQRcodeOptionInHeader();
    await expect(homePage.qRCodeInDropdown).toBeVisible();
    await expect(homePage.appStoreIconInDropdown).toBeVisible();
    await expect(homePage.googlePlayMarketIconInDropdown).toBeVisible();
    await expect(homePage.knowMoreButtonInDropdown).toBeVisible();
    await expect(homePage.loginButtonInHeader).toBeVisible();
    await expect(homePage.languageSwitcherInHeader).toBeVisible();
    await expect(homePage.employerLinkInHeader).toBeVisible();
});
