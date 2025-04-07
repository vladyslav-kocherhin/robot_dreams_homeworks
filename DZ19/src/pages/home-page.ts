import { Locator, Page } from '@playwright/test';

export class HomePage {
    public constructor(private readonly page: Page) {}

    public async open(): Promise<void> {
        await this.page.goto('https://dnipro-m.ua/');
    }

    public async scrollToBottom(): Promise<void> {
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }
}

export class Header {
    public constructor(private readonly page: Page) {}

    public get logo(): Locator {
        return this.page.locator('img[plerdy-tracking-id="75861121901"]');
    }

    public get searchField(): Locator {
        return this.page.locator('input[plerdy-tracking-id="42442396301"]');
    }

    public get catalogLogo(): Locator {
        return this.page.locator('svg[plerdy-tracking-id="81995820316"]');
    }

    public get catalogText(): Locator {
        return this.page.locator('span[plerdy-tracking-id="74058840601"]');
    }

    public get bonusOption(): Locator {
        return this.page.locator('img[plerdy-tracking-id="49823979502"]');
    }

    public get loginOption(): Locator {
        return this.page.locator('svg[plerdy-tracking-id="61578164801"]');
    }

    public get wishListOption(): Locator {
        return this.page.locator('svg[plerdy-tracking-id="84293608501"]');
    }

    public get comparisonOption(): Locator {
        return this.page.locator('svg[plerdy-tracking-id="65681618301"]');
    }

    public get cartOption(): Locator {
        return this.page.locator('svg[plerdy-tracking-id="26104660701"]');
    }

    public get newsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="79743140802"]');
    }

    public get promotionsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="65508561501"]');
    }

    public get outletMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="24942410302"]');
    }

    public get salonsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="15627859702"]');
    }

    public get franchiseMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="68390394802"]');
    }

    public get reviewsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="27722905602"]');
    }

    public get serviceMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="15018154102"]');
    }

    public get clientsMenuOption(): Locator {
        return this.page.locator('li[plerdy-tracking-id="79845501801"]');
    }

    public get locationOption(): Locator {
        return this.page.locator('li[plerdy-tracking-id="99366125001"]');
    }

    public get supportServiceOption(): Locator {
        return this.page.locator('div[plerdy-tracking-id="51370337401"]');
    }

    public get languageSelectorOption(): Locator {
        return this.page.locator('div[plerdy-tracking-id="31580287201"]');
    }

}

export class Footer {
    public constructor(private readonly page: Page) {}

    public get franchiseMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875901"]');
    }

    public get reviewsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875902"]');
    }

    public get blogMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875903"]');
    }

    public get workMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875904"]');
    }

    public get newItemsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875905"]');
    }

    public get blackFridayMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875906"]');
    }

    public get newsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875907"]');
    }

    public get promotionsKitsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875908"]');
    }

    public get loyaltyProgramsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875909"]');
    }

    public get skillsClubMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875910"]');
    }


    public get contactsMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875911"]');
    }

    public get goodsReturnMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875912"]');
    }

    public get deliveryAndPaymentMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875913"]');
    }

    public get blackListMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875914"]');
    }

    public get fAQMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875915"]');
    }


    public get serviceMenuOption(): Locator {
        return this.page.locator('a[plerdy-tracking-id="90067875916"]');
    }

    public get supportPhoneNumber(): Locator {
        return this.page.locator('a[plerdy-tracking-id="33970726401"]');
    }

    public get promotionsAndDiscountsMessage(): Locator {
        return this.page.locator('span.footer-menu__subscribe-title');
    }

    public get emailField(): Locator {
        return this.page.locator('input[plerdy-tracking-id="79821073701"]');
    }

    public get subscribeButton(): Locator {
        return this.page.locator('button[plerdy-tracking-id="55818165301"]');
    }

    public get termsAndConditionsLink(): Locator {
        return this.page.locator('p.agree-terms__text');
    }


    public get copyright(): Locator {
        return this.page.locator('p.page-footer__copyright');
    }

    public get visaLogo(): Locator {
        return this.page.locator('img[plerdy-tracking-id="90130453201"]');
    }

    public get masterCardLogo(): Locator {
        return this.page.locator('img[plerdy-tracking-id="77849630201"]');
    }

    public get privat24Logo(): Locator {
        return this.page.locator('img[plerdy-tracking-id="31402503001"]');
    }

    public get payPartLogo(): Locator {
        return this.page.locator('img[plerdy-tracking-id="27558073501"]');
    }

    public get monobankLogo(): Locator {
        return this.page.locator('img[plerdy-tracking-id="21375400001"]');
    }

    public get applePayLogo(): Locator {
        return this.page.locator('img[plerdy-tracking-id="61193767201"]');
    }

    public get googlePayLogo(): Locator {
        return this.page.locator('img[plerdy-tracking-id="62748763401"]');
    }


    public get facebookLogo(): Locator {
        return this.page.locator('a[plerdy-tracking-id="43565396901"]');
    }

    public get youtubeLogo(): Locator {
        return this.page.locator('a[plerdy-tracking-id="63772957201"]');
    }

    public get instagramLogo(): Locator {
        return this.page.locator('a[plerdy-tracking-id="22480044501"]');
    }

    public get twitterLogo(): Locator {
        return this.page.locator('a[plerdy-tracking-id="16414273001"]');
    }

    public get telegramLogo(): Locator {
        return this.page.locator('a[plerdy-tracking-id="41670711201"]');
    }

    public get whatsAppLogo(): Locator {
        return this.page.locator('a[plerdy-tracking-id="94317163101"]');
    }

    public get tikTokLogo(): Locator {
        return this.page.locator('a[plerdy-tracking-id="91343127701"]');
    }

}
