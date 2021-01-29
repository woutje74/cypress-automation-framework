//This testfile demonstrates the use of pageObjects

import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO' //references a pageObject
import ContactUs_PO from '../../support/pageObjects/webdriver-uni/contact_us_PO'
/// <reference types="cypress" />

describe("Test Contact Us from via Webdriveruniversity", () => {
    const contactForm_PO = new ContactUs_PO(); // declaring a pageObject at the top of a describe() block makes them available in all following tests
    const homepage_PO = new HomePage_PO();

    before(function(){
        cy.fixture('contact-us-fixture').then((data)=>{
            globalThis.data = data
        })
    })

    beforeEach(function(){
        homepage_PO.visitHomePage();
        homepage_PO.clickOn_ContactUs_Button();
    })
        it("should be able to perform succesful submission", () => {
            cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
            cy.title().should('include', 'WebDriver | Contact Us')
            cy.url().should('include', 'contactus')
            contactForm_PO.contactForm_Submission(data.first_name, data.last_name, data.email, 'firefox', 'h1', 'Thank You for your Message!')
        })

        it("should be able to perform succesful submission", () => {
            cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
            cy.title().should('include', 'WebDriver | Contact Us')
            cy.url().should('include', 'contactus')
            contactForm_PO.contactForm_Submission(data.first_name, data.last_name, data.email, 'chrome', 'h1', 'Thank You for your Message!')
        })

        it("Unable to perform succesful submission", () =>{            
            contactForm_PO.contactForm_Submission(data.first_name, data.last_name, " ", 'comment', 'body', 'Error: Invalid email address')
        })

})