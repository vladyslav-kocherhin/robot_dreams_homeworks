describe('Ukrposhta CSS', () => {

    it('Header should contain all elements', () => {

        cy.visit('https://track.ukrposhta.ua/');

        //Перевірка відображення головного лого

        cy.xpath('//*[@id="top-header"]/div/div/a/img')
            .should('be.visible')
            .and('have.attr', 'src', './images/site-ua-logo.svg');

        cy.xpath('//*[@id="top-header"]/div/div/a')
            .should('be.visible')
            .and('have.attr', 'href')
            .and('include', 'https://www.ukrposhta.ua');

        //Перевірка відображення контактних даних служби підтримки

        cy.xpath('//*[@id="top-header"]/div/div/div/a')
            .should('be.visible')
            .and('have.attr', 'href', 'tel:0 800 300 545')
            .and('contain.text', '0 800 300 545');

        cy.xpath('//*[@id="top-header"]/div/div/div/p[1]/a')
            .should('be.visible')
            .and('have.attr', 'href', 'mailto:ukrposhta@ukrposhta.ua')
            .and('contain.text', 'ukrposhta@ukrposhta.ua');

        cy.xpath('//*[@id="top-header"]/div/div/div/p[2]')
            .should('be.visible')
            .and('contain.text', 'контакт-центр');

        //Перевірка відображення опцій меню

        cy.xpath('//*[@id="bottom-line"]/nav/ul/li[1]/a')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'href', 'https://postmark.ukrposhta.ua')
            .and('have.text', 'Postmark');

        cy.xpath('//*[@id="bottom-line"]/nav/ul/li[2]/a')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'href', 'https://track.ukrposhta.ua/tracking_UA.html')
            .and('have.text', 'Трекінг');

        cy.xpath('//*[@id="services-link"]')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'id', 'services-link')
            .and('have.text', 'Послуги');

        cy.xpath('//*[@id="tariffs-link"]')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'id', 'tariffs-link')
            .and('have.text', 'Тарифи');

        cy.xpath('//*[@id="bottom-line"]/nav/ul/li[5]/a')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'href', 'https://offices.ukrposhta.ua')
            .and('have.text', 'Відділення');

        cy.xpath('//*[@id="philately-link"]')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'id', 'philately-link')
            .and('have.text', 'Філателія');

        cy.xpath('//*[@id="bottom-line"]/nav/ul/li[7]/a')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'href', 'https://www.ukrposhta.ua/ua/vacancies/')
            .and('have.text', 'Кар’єра');

        cy.xpath('//*[@id="bottom-line"]/nav/ul/li[8]/a')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'href', 'https://www.ukrposhta.ua/ua/ukrposhta-dlia-biznesu')
            .and('have.text', 'Бізнесу');

        //Перевірка відображення посилання на форму логіну/реєстрації

        cy.xpath('//*[@id="bottom-line"]/div[2]/a[1]')
            .should('be.visible')
            .and('have.class', 'user-account col-auto')
            .and('have.attr', 'href', 'https://ok.ukrposhta.ua/ua/');

        cy.xpath('//*[@id="bottom-line"]/div[2]/a[1]/span')
            .should('be.visible')
            .and('contain.text', 'Вхід / ');

        cy.xpath('//*[@id="bottom-line"]/div[2]/a[2]')
            .should('be.visible')
            .and('have.class', 'user-account col-auto')
            .and('have.attr', 'href', 'https://ok.ukrposhta.ua/ua/register');

        cy.xpath('//*[@id="bottom-line"]/div[2]/a[2]/span')
            .should('be.visible')
            .and('contain.text', 'Реєстрація ');

        cy.xpath('//*[@id="bottom-line"]/div[2]/a[2]/img')
            .should('be.visible')
            .and('have.attr', 'src', './images/logo-enter.svg');

        //Перевірка відображення вибору мови

        cy.xpath('//*[@id="language-menu-trigger-header"]')
            .should('be.visible')
            .and('contain.text', 'UA');

        cy.xpath('//*[@id="language-menu-trigger-header"]').click();

        cy.xpath('//*[@id="language-menu-block-header"]/div/a')
            .should('be.visible')
            .and('have.attr', 'href', '/tracking_EN.html')
            .and('contain.text', 'EN');
    });

    it('Back to top button should work correctly', () => {
        cy.visit('https://track.ukrposhta.ua/');
        cy.xpath('//*[@id="scrollTopBtn"]').should('not.be.visible');
        cy.xpath('//*[@id="masseg_cookie"]').click();
        cy.scrollTo('bottom');
        cy.xpath('//*[@id="scrollTopBtn"]').should('be.visible');
        cy.xpath('//*[@id="scrollTopBtn"]').click();
        cy.window().its('scrollY').should('equal', 0);
        cy.xpath('//*[@id="scrollTopBtn"]').should('not.be.visible');
    });
});

