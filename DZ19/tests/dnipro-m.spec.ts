import { expect, test } from '@playwright/test';
import { HomePage, Header, Footer } from '../src/pages/home-page';

test.describe('Dnipro-m tests', () => {
    let homePage: HomePage;
    let header: Header;
    let footer: Footer;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        header = new Header(page);
        footer = new Footer(page);
        await homePage.open();
    });

    test('Should verify all elements in header', async () => {
        await expect(header.logo).toBeVisible();
        await expect(header.searchField).toBeVisible();
        await expect(header.catalogLogo).toBeVisible();
        await expect(header.catalogText).toBeVisible();
        await expect(header.bonusOption).toBeVisible();
        await expect(header.loginOption).toBeVisible();
        await expect(header.wishListOption).toBeVisible();
        await expect(header.comparisonOption).toBeVisible();
        await expect(header.cartOption).toBeVisible();
        await expect(header.newsMenuOption).toBeVisible();
        await expect(header.promotionsMenuOption).toBeVisible();
        await expect(header.outletMenuOption).toBeVisible();
        await expect(header.salonsMenuOption).toBeVisible();
        await expect(header.franchiseMenuOption).toBeVisible();
        await expect(header.reviewsMenuOption).toBeVisible();
        await expect(header.serviceMenuOption).toBeVisible();
        await expect(header.clientsMenuOption).toBeVisible();
        await expect(header.locationOption).toBeVisible();
        await expect(header.supportServiceOption).toBeVisible();
        await expect(header.languageSelectorOption).toBeVisible();
    });

    test('Should verify all elements in footer', async () => {
        await homePage.scrollToBottom();

        await expect(footer.franchiseMenuOption).toBeVisible();
        await expect(footer.reviewsMenuOption).toBeVisible();
        await expect(footer.blogMenuOption).toBeVisible();
        await expect(footer.workMenuOption).toBeVisible();
        await expect(footer.newItemsMenuOption).toBeVisible();
        await expect(footer.blackFridayMenuOption).toBeVisible();
        await expect(footer.newsMenuOption).toBeVisible();
        await expect(footer.promotionsKitsMenuOption).toBeVisible();
        await expect(footer.loyaltyProgramsMenuOption).toBeVisible();
        await expect(footer.skillsClubMenuOption).toBeVisible();

        await expect(footer.contactsMenuOption).toBeVisible();
        await expect(footer.goodsReturnMenuOption).toBeVisible();
        await expect(footer.deliveryAndPaymentMenuOption).toBeVisible();
        await expect(footer.blackListMenuOption).toBeVisible();
        await expect(footer.fAQMenuOption).toBeVisible();

        await expect(footer.serviceMenuOption).toBeVisible();

        await expect(footer.supportPhoneNumber).toBeVisible();
        await expect(footer.promotionsAndDiscountsMessage).toBeVisible();
        await expect(footer.emailField).toBeVisible();
        await expect(footer.subscribeButton).toBeVisible();
        await expect(footer.termsAndConditionsLink).toBeVisible();

        await expect(footer.copyright).toBeVisible();
        await expect(footer.visaLogo).toBeVisible();
        await expect(footer.masterCardLogo).toBeVisible();
        await expect(footer.privat24Logo).toBeVisible();
        await expect(footer.payPartLogo).toBeVisible();
        await expect(footer.monobankLogo).toBeVisible();
        await expect(footer.applePayLogo).toBeVisible();
        await expect(footer.googlePayLogo).toBeVisible();

        await expect(footer.facebookLogo).toBeVisible();
        await expect(footer.instagramLogo).toBeVisible();
        await expect(footer.twitterLogo).toBeVisible();
        await expect(footer.youtubeLogo).toBeVisible();
        await expect(footer.telegramLogo).toBeVisible();
        await expect(footer.whatsAppLogo).toBeVisible();
        await expect(footer.tikTokLogo).toBeVisible();
    });

});
