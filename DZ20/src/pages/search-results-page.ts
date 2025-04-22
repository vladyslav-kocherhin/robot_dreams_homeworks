import { Locator, Page } from '@playwright/test';

export class SearchResultsPage {
    public constructor(private readonly page: Page) {}

    public get dateFilter(): Locator {
        return this.page.locator('#dropdownMenu2');
    }

    public get advancedFilter(): Locator {
        return this.page.locator('#adv-search');
    }

    public get searchResults(): Locator {
        return this.page.locator('#pjax-jobs-list');
    }

}
