import { expect, test } from '@playwright/test';
import { HomePage } from '../src/pages/home-page';
import { SearchResultsPage } from '../src/pages/search-results-page';

test.describe('Work.ua tests', () => {
    let homePage: HomePage;
    let searchResultsPage: SearchResultsPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        searchResultsPage = new SearchResultsPage(page);
        await homePage.open();
    });

    test('Should verify all elements in header', async () => {
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

    test('Should verify search functionality', async () => {
        await homePage.searchJob('QA', 'Київ');
        await expect(searchResultsPage.dateFilter).toBeVisible();
        await expect(searchResultsPage.advancedFilter).toBeVisible();
        await expect(searchResultsPage.searchResults).toBeVisible();
    });

});
