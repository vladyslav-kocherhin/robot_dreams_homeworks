describe('Ukrposhta CSS', () => {

    it('Header should contain all elements', () => {

        cy.visit('https://track.ukrposhta.ua/');

        //Перевірка відображення головного лого

        cy.get('img[src="./images/site-ua-logo.svg"]')
            .should('be.visible')
            .and('have.attr', 'src', './images/site-ua-logo.svg');

        cy.get('a[href*="https://www.ukrposhta.ua"]')
            .should('be.visible')
            .and('have.attr', 'href')
            .and('include', 'https://www.ukrposhta.ua');

        //Перевірка відображення контактних даних слежби підтримки

        cy.get('a[href="tel:0 800 300 545"]')
            .should('be.visible')
            .and('have.attr', 'href', 'tel:0 800 300 545')
            .and('contain.text', '0 800 300 545');

        cy.get('a[href="mailto:ukrposhta@ukrposhta.ua"]')
            .should('be.visible')
            .and('have.attr', 'href', 'mailto:ukrposhta@ukrposhta.ua')
            .and('contain.text', 'ukrposhta@ukrposhta.ua');

        cy.get('p')
            .should('be.visible')
            .and('contain.text', 'контакт-центр');

        //Перевірка відображення опцій меню

        cy.get('a.main-navbar-link[href="https://postmark.ukrposhta.ua"]')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'href', 'https://postmark.ukrposhta.ua')
            .and('have.text', 'Postmark');

        cy.get('a.main-navbar-link[href="https://track.ukrposhta.ua/tracking_UA.html"]')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'href', 'https://track.ukrposhta.ua/tracking_UA.html')
            .and('have.text', 'Трекінг');

        cy.get('a.main-navbar-link#services-link')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'id', 'services-link')
            .and('have.text', 'Послуги');

        cy.get('a.main-navbar-link#tariffs-link')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'id', 'tariffs-link')
            .and('have.text', 'Тарифи');

        cy.get('a.main-navbar-link[href="https://offices.ukrposhta.ua"]')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'href', 'https://offices.ukrposhta.ua')
            .and('have.text', 'Відділення');

        cy.get('a.main-navbar-link#philately-link')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'id', 'philately-link')
            .and('have.text', 'Філателія');

        cy.get('a.main-navbar-link[href="https://www.ukrposhta.ua/ua/vacancies/"]')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'href', 'https://www.ukrposhta.ua/ua/vacancies/')
            .and('have.text', 'Кар’єра');

        cy.get('a.main-navbar-link[href="https://www.ukrposhta.ua/ua/ukrposhta-dlia-biznesu"]')
            .should('be.visible')
            .and('have.class', 'main-navbar-link')
            .and('have.attr', 'href', 'https://www.ukrposhta.ua/ua/ukrposhta-dlia-biznesu')
            .and('have.text', 'Бізнесу');

        //Перевірка відображення посилання на форму логіну/реєстрації

        cy.get('a.user-account.col-auto[href="https://ok.ukrposhta.ua/ua/"]')
            .should('be.visible')
            .and('have.class', 'user-account col-auto')
            .and('have.attr', 'href', 'https://ok.ukrposhta.ua/ua/');

        cy.get('span.login-text')
            .should('be.visible')
            .and('contain.text', 'Вхід / ');

        cy.get('a.user-account.col-auto[href="https://ok.ukrposhta.ua/ua/register"]')
            .should('be.visible')
            .and('have.class', 'user-account col-auto')
            .and('have.attr', 'href', 'https://ok.ukrposhta.ua/ua/register');

        cy.get('span.login-text')
            .should('be.visible')
            .and('contain.text', 'Реєстрація ');

        cy.get('img[src="./images/logo-enter.svg"]')
            .should('be.visible')
            .and('have.attr', 'src', './images/logo-enter.svg');

        //Перевірка відображення вибору мови

        cy.get('span#language-menu-trigger-header')
            .should('be.visible')
            .and('contain.text', 'UA');

        cy.get('span#language-menu-trigger-header').click();

        cy.get('a[href="/tracking_EN.html"]')
            .should('be.visible')
            .and('have.attr', 'href', '/tracking_EN.html')
            .and('contain.text', 'EN');
    });

    it('Back to top button should work correctly', () => {
        cy.visit('https://track.ukrposhta.ua/');
        cy.get('button#scrollTopBtn').should('not.be.visible');
        cy.get('input#masseg_cookie').click();
        cy.scrollTo('bottom');
        cy.get('button#scrollTopBtn').should('be.visible');
        cy.get('button#scrollTopBtn').click();
        cy.window().its('scrollY').should('equal', 0);
        cy.get('button#scrollTopBtn').should('not.be.visible');
    });
});
