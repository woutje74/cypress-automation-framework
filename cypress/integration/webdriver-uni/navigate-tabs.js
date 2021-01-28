/// <reference types="cypress" />

describe("Test Contact Us from via Webdriveruniversity", () => {

    it("should be able to perform succesful submission", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
        cy.title().should('include', 'WebDriver | Contact Us')
        // cy.url().should('include', 'contactus')
        // cy.get('[name="first_name"]').type("John")
        // cy.get('[name="last_name"]').type("Doe")
        // cy.get('[name="email"]').type("fake@email.com")
        // cy.get('textarea.feedback-input').type("Comment")
        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it("Unable to perform succesful submission", () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
    cy.get('[name="first_name"]').type("John")
    cy.get('[name="last_name"]').type("Doe")
    cy.get('textarea.feedback-input').type("Comment")
    cy.get('[type="submit"]').click()
    cy.get('body').contains('Error: all fields are required')
    })

})