/// <reference types="cypress" />

describe("Varifying variables, cypress commands and jquery commands", () => {

    it("Navigating to specific product pages", () => {
        cy.visit("http://www.automationteststore.com")
        // the following will fail
        // const makeUpLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skinCareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeUpLink.click();
        // skinCareLink.click();

        // This will work
        // const makeUpLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeUpLink.click();
        // const skinCareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skinCareLink.click();

        //Recommended approach
        // cy.get("a[href*='product/category&path=']").contains("Makeup")
        // cy.get("a[href*='product/category&path=']").contains("Skincare")

        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        // Following code will fail
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text())

        //correct way to use const variable with jquery .text()
        cy.get("h1 .maintext").then(($headerText)=>{
            const headerText = $headerText.text()
            cy.log(headerText)
            expect(headerText).is.eq('Makeup')
        })
        
    })

    it("Validate properties of the Contact Us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //Uses Cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:')

        //JQuery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
            cy.log(fnText.text()) //takes text from element
            cy.log(fnText)  //outputs element
        })
        })

        

    })

})