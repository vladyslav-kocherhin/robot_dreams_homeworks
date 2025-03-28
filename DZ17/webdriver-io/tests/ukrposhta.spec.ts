import { HeaderPage } from '../src/pages/header.page';
import { BasePage } from '../src/pages/base.page';
import { expect } from '@wdio/globals';

describe('Ukrposhta Header Tests', () => {

    beforeEach(async () => {
        await BasePage.open();
    });

    it('should verify header contains all elements', async () => {
        await HeaderPage.expectMainLogoToBeVisiable();
        await HeaderPage.expectContactInformationToBeVisible();
        await HeaderPage.expectMenuOptionsToBeVisiable();
        await HeaderPage.expectLoginAndRegistrationLinksToBeVisible();
        await HeaderPage.expectLanguageSwitcherToBeVisible();
    });

    it('should verify "Back to top" button functionality', async () => {
        await expect(BasePage.scrollToTopButton).not.toBeDisplayed();
        await BasePage.scrollAllWayDown();
        await BasePage.acceptAllCookies();
        await expect(BasePage.scrollToTopButton).toBeDisplayed();
        await BasePage.scrollToTopButton.click();
        await expect(BasePage.scrollToTopButton).not.toBeDisplayed();
    });
});
