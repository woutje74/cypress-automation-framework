//This test file demonstrates the use of Cypress.Commands contained within the commands.js file in /support

/// <reference types="cypress" />

describe("Test Contact Us from via Webdriveruniversity", () => {
    before(function(){
        cy.fixture('contact-us-fixture').then((data)=>{
            globalThis.data = data
        })
    })

    beforeEach(function(){
       cy.visit(Cypress.env('webdriveruni_homepage') + "/Contact-Us/contactus.html")
       
    })
        it("should be able to perform succesful submission", () => {
            cy.document().should('have.property', 'charset').and('eq', 'UTF-8') //meerdere assertions
            cy.title().should('include', 'WebDriver | Contact Us')
            cy.url().should('include', 'contactus')
            cy.inputContactDetails(data.first_name, data.last_name, data.email, 'comment', 'h1', 'Thank You for your Message!')
       
        })

        it("Unable to perform succesful submission", () => {
            cy.inputContactDetails(data.first_name, data.last_name, " ", 'comment', 'body', 'Error: Invalid email address')
        })

})