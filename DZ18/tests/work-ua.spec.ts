import { test } from '@playwright/test';
import { JoobleHomePage } from '../src/pages/work-ua-home-page';

test.describe('Work.ua homepage tests', () => {
    let pageObject: JoobleHomePage;

    test.beforeEach(async ({ page }) => {
        pageObject = new JoobleHomePage(page);
        await pageObject.open();
    });

    test('Should verify all elements in header', async () => {
        await pageObject.isLogoVisible();
        await pageObject.isJobsSearchOptionInHeaderVisible();
        await pageObject.isQRcodeOptionInHeaderVisible();
        await pageObject.clickOnQRcodeOptionInHeader();
        await pageObject.isQRcodeInDropdownVisible();
        await pageObject.isAppStoreIconInDropdownVisible();
        await pageObject.isGooglePlayMarketIconInDropdownVisible();
        await pageObject.isKnowMoreButtonInDropdownVisible();
        await pageObject.isLoginButtonInHeaderVisible();
        await pageObject.isLanguageSwitcherInHeaderVisible();
        await pageObject.isEmployerLinkInHeaderVisible();
    });

    test('Should verify search functionality', async () => {
        await pageObject.searchJob('QA', 'Київ');
        await pageObject.isDateFilterVisible();
        await pageObject.isAdvancedFilterVisible();
        await pageObject.isSearchResultsVisible();
    });

});
