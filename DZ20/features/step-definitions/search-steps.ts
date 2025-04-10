import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../../src/pages/home-page';
import { SearchResultsPage } from '../../src/pages/search-results-page';
import { CustomWorld } from '../support/world';

let homePage: HomePage;
let searchResultsPage: SearchResultsPage;

When<CustomWorld>('I search for "QA" job', async function () {
    homePage = new HomePage(this.page);
    searchResultsPage = new SearchResultsPage(this.page);
    await homePage.searchJob('QA', 'Київ');
});

Then<CustomWorld>('I should see search results', async function () {
    await expect(searchResultsPage.dateFilter).toBeVisible();
    await expect(searchResultsPage.advancedFilter).toBeVisible();
    await expect(searchResultsPage.searchResults).toBeVisible();
});
