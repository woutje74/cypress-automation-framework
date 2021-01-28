import AutoStore_Product_PO from '../../support/pageObjects/automation-test-store/AutoStore_Product_PO'

/// <reference types="cypress" />

describe("Alias and invoke", () => {
    const product_PO = new AutoStore_Product_PO()
    it("Validate availability of a specific product", () => {
        cy.visit("/")
        cy.get("a[href*='product/category&path=']").contains(Cypress.env('category')).click()
        product_PO.validateProduct(Cypress.env('prodName'))
        })

})