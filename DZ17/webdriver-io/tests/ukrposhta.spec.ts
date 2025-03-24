import { HeaderPage } from '../src/pages/header.page';
import { BasePage } from '../src/pages/base.page';

describe('Ukrposhta Header Tests', () => {

    beforeEach(async () => {
        await BasePage.open();
    });

    it('should verify header contains all elements', async () => {
        await HeaderPage.mainLogoIsVisible();
        await HeaderPage.contactInformationIsVisible();
        await HeaderPage.menuOptionsIsVisible();
        await HeaderPage.loginAndRegistrationLinksIsVisible();
        await HeaderPage.languageSwitcherIsVisible();
    });

    it('should verify "Back to top" button functionality', async () => {
        await BasePage.scrollToTopButtonWorksCorrectly();
    });
});
