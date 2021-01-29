// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-iframe';
import 'cypress-file-upload';

//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
Cypress.Commands.add("selectProduct", productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text().includes(productName)) {
            cy.wrap($el).click()
        }
    });
})

Cypress.Commands.add("addProductToBasket", productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text() === productName) {
            cy.log($el.text())
            cy.get('.productcart').eq(index).click()
        }
    })
})

Cypress.Commands.add('inputContactDetails', (firstName, lastName, eMail, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(eMail)
    cy.get('textarea.feedback-input').type(comment)
    cy.get('[type="submit"]').click()
    cy.get($selector).contains(textToLocate)
})

Cypress.Commands.add('navigateToWebDriverUniHomepage', (url) => {
    cy.visit(Cypress.env("webdriveruni_homepage"))
})

Cypress.Commands.add('navigateToWebDriverUniCheckboxPage', (url) => {
    //use npx cypress open --env configFile=staging before you can use this
    cy.visit(Cypress.env("webdriveruni_homepage") + "/Dropdown-Checkboxes-RadioButtons/index.html")
})

Cypress.Commands.add('linkedInLogin', () => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')

        expect(username, 'username was set').to.be.a('string').and.not.be.empty
        //expect(password, 'password was set').to.be.a('string').and.not.be.empty

        if(typeof password !== 'string' || !password){
            throw new Error('Missing password value, set using CYPRESS-password=...') //voorkomt dat password zichtbaar wordt in assertion message in testrunner
        }

    cy.visit('https://www.linkedin.com')
    cy.get('[action-type="ACCEPT"]').click()
    cy.get('a[href$="signin"]').click()
    cy.get('.header__content__heading').should('have.text', 'Sign in')
    cy.get('input[validation="email|tel"]').type(username)
    cy.get('input[name="session_password"]').type(password, {log: false}) //voorkomt dat password zichtbaar is tijdens plaatsen
    cy.get('button[aria-label="Sign in"]').click()

    Cypress.Cookies.preserveOnce(
    'lidc', 
    'lang', 
    'li_at', 
    'AMCV_14215E3D5995C57C0A495C55%40AdobeOrg', 
    'AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg',
    'bcookie',
    '_ga',
    'PLAY_LANG',
    'li_rm',
    'li_gc',
    'li_mc',
    'JSESSIONID',
    'lissc',
    'liap',
    'visit',
    'bscookie',
    '_gid',
    'G_ENABLED_IDPS',
    'PLAY_SESSION', 
    'spectroscopyId', 
    )
})
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
