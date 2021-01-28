/// <reference types="cypress" />

describe("Inspect AutomationTestStore items using command chaining", () => {

    it("click on the first item using item attribute", () => {
        cy.visit('http://www.automationteststore.com/')
        cy.get("[title='Skinsheen Bronzer Stick']").click()
    })

    it.only("click on the first item using item text", () => {
        cy.visit('http://www.automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(
            function(itemHeaderText){
                console.log("Selected item is: " + itemHeaderText.text())
            }
        ) //chaining commands
    })

    it("click on the first item using item index", () => {
        cy.visit('http://www.automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(2).click()
    })

})