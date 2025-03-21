import { assert } from 'chai';
import puppeteer, { Browser, Page } from 'puppeteer';

describe('Ukrposhta Puppeteer Tests', () => {
    let browser: Browser;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({ headless: false, defaultViewport: null });
        page = await browser.newPage();
    });

    after(async () => {
        await browser.close();
    });

    it('should contain all header elements', async () => {
        await page.goto('https://track.ukrposhta.ua/');

        // Головне лого
        await page.waitForSelector('img[src="./images/site-ua-logo.svg"]', { visible: true });
        await page.waitForSelector('a[href*="https://www.ukrposhta.ua"]', { visible: true });

        // Контактні дані
        await page.waitForSelector('a[href="tel:0 800 300 545"]', { visible: true });
        await page.waitForSelector('a[href="mailto:ukrposhta@ukrposhta.ua"]', { visible: true });
        await page.waitForSelector('p', { visible: true });

        // Опції меню
        await page.waitForSelector('a.main-navbar-link[href="https://postmark.ukrposhta.ua"]', { visible: true });
        await page.waitForSelector('a.main-navbar-link[href="https://track.ukrposhta.ua/tracking_UA.html"]', { visible: true });
        await page.waitForSelector('a.main-navbar-link#services-link', { visible: true });
        await page.waitForSelector('a.main-navbar-link#tariffs-link', { visible: true });
        await page.waitForSelector('a.main-navbar-link[href="https://offices.ukrposhta.ua"]', { visible: true });
        await page.waitForSelector('a.main-navbar-link#philately-link', { visible: true });
        await page.waitForSelector('a.main-navbar-link[href="https://www.ukrposhta.ua/ua/vacancies/"]', { visible: true });
        await page.waitForSelector('a.main-navbar-link[href="https://www.ukrposhta.ua/ua/ukrposhta-dlia-biznesu"]', { visible: true });

        // Форма логіну/реєстрації з перевіркою атрибутів
        const registerLink = 'a.user-account.col-auto[href="https://ok.ukrposhta.ua/ua/register"]';
        await page.waitForSelector(registerLink, { visible: true });
        const registerLinkClass = await page.$eval(registerLink, (el: { className: unknown; }) => el.className);
        const registerLinkHref = await page.$eval(registerLink, (el: { getAttribute: (arg0: string) => unknown; }) => el.getAttribute('href'));

        assert.strictEqual(registerLinkClass, 'user-account col-auto', 'Клас посилання не відповідає очікуваному');
        assert.strictEqual(registerLinkHref, 'https://ok.ukrposhta.ua/ua/register', 'Href посилання не відповідає очікуваному');

        await page.waitForSelector('a.user-account.col-auto[href="https://ok.ukrposhta.ua/ua/"]', { visible: true });
        await page.waitForSelector('span.login-text', { visible: true });
        await page.waitForSelector('img[src="./images/logo-enter.svg"]', { visible: true });

        // Вибір мови
        await page.waitForSelector('#language-menu-trigger-header', { visible: true });
    });

    it('should correctly handle "Back to top" button functionality', async () => {
        await page.goto('https://track.ukrposhta.ua/');

        const scrollTopBtn = 'button#scrollTopBtn';

        // Кнопка спочатку не видима
        const isScrollBtnVisible = await page.$eval(scrollTopBtn, (el: Element) => window.getComputedStyle(el).display !== 'none');
        assert.strictEqual(isScrollBtnVisible, false, 'Кнопка має бути прихована');

        // Закриваємо повідомлення cookie
        await page.waitForSelector('input#masseg_cookie', { visible: true, timeout: 5000 });
        await page.click('input#masseg_cookie');

        // Прокрутка вниз, кнопка повинна з'явитися

        await page.evaluate(async () => {
            await new Promise<void>(resolve => {
                let totalHeight = 0;
                const distance = 100;
                const timer = setInterval(() => {
                    const scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;

                    if (totalHeight >= scrollHeight){
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);
            });
        });

        //await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForSelector(scrollTopBtn, { visible: true });

        // Натискаємо кнопку "Back to top"
        await page.click(scrollTopBtn);

        // Перевіряємо, що сторінка прокручена догори
        const scrollY = await page.evaluate(() => window.scrollY);
        assert.strictEqual(scrollY, 0, 'Сторінка не прокручена до верху');

    });
});
