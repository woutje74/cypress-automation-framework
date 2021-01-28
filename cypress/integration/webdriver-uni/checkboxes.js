/// <reference types='cypress' />

describe("Verifying checkboxes on Webdriveruni", () => {
    beforeEach(function(){
        cy.navigateToWebDriverUniCheckboxPage()
        //cy.visit('/') // uses baseUrl
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
    })
    it('Check and validate checkbox', () => {
        cy.get('input[value="option-2"').check().should('be.checked')
    })

    it('Uncheck and validate checkbox', () => {
       cy.get('input[value="option-3"]').uncheck().should('not.be.checked')
    })

    it('Check multiple checkboxes and validate checkbox', () => {
        cy.get('input[type="checkbox"]').check(["option-1", "option-2" ,"option-3", "option-4"]).should('be.checked')
    })
})