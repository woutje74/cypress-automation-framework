import AutoStore_ShoppincCart_PO from '../../support/pageObjects/automation-test-store/AutoStore_ShoppingCart_PO'
import AutoStore_Haircare_PO from '../../support/pageObjects/automation-test-store/AutoStore_Haircare_PO'
/// <reference types="cypress" />

describe("Alias and invoke", () => {
    const hairCare_PO = new AutoStore_Haircare_PO()
    const shoppingCart = new AutoStore_ShoppincCart_PO()
    it.only("Validate availability of a specific haircare product", () => {
        cy.visit("/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        hairCare_PO.validateProduct(Cypress.env('prodName'))
        })

    it('Challenge chapter 82 Alias & Invoke', () => {
        cy.visit("/") //refers to baseUrl in cypress.json
        cy.get('.thumbnail').as('thumbnail')
        cy.get('@thumbnail').its('length').should('equal', 16)
        cy.get('@thumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it('Calculate total of all products', () => {
        cy.visit("http://www.automationteststore.com")
        shoppingCart.totalPriceItems()
    })

})