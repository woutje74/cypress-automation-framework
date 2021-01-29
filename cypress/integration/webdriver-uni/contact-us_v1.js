// This test file shows the use of a fixture file and environmental variables

/// <reference types="cypress" />

describe("Test Contact Us from via Webdriveruniversity", () => {
    before(function(){
        cy.fixture('contact-us-fixture').then((data)=>{ // references the fixture file that contains the data
            globalThis.data = data
        })
    })

    beforeEach(function(){
        cy.visit(Cypress.env('webdriveruni_homepage') + "/Contact-Us/contactus.html") // references the environmental variable in cypress.json
    })
        it("should be able to perform succesful submission", () => {
            cy.document().should('have.property', 'charset').and('eq', 'UTF-8') //meerdere assertions
            cy.title().should('include', 'WebDriver | Contact Us')
            cy.url().should('include', 'contactus')
            cy.get('[name="first_name"]').type(data.first_name)
            cy.get('[name="last_name"]').type(data.last_name)
            cy.get('[name="email"]').type(data.email)
            cy.get('textarea.feedback-input').type("Comment")
            cy.get('[type="submit"]').click()
            cy.get('h1').contains('Thank You for your Message!')
        })

        it("Unable to perform succesful submission", () => {
            cy.get('[name="first_name"]').type(data.first_name)
            cy.get('[name="last_name"]').type(data.last_name)
            if(Cypress.isBrowser('firefox')){ 
                cy.get('textarea.feedback-input').type("I am using Firefox")
                cy.log('This the wrong browser')
            } else {             
                cy.get('textarea.feedback-input').type("I am using another browser")
            }
            cy.get('[type="submit"]').click()
            cy.get('body').contains('Error: all fields are required')
            
        })

})