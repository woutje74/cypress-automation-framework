/// <reference types="cypress" />

describe("Iterate over elements", () => {
    beforeEach(function(){
        cy.visit("http://www.automationteststore.com")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })

    it("Log information of all haircare products", () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
            })
    })

    it("Add specific product to basket", () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes("Curls to straight Shampoo")){
                cy.wrap($el).click()
                }
        })
    })
    
    it("Add another specific product to basket", () => {
        cy.selectProduct('Seaweed Conditioner')
    })

    it("Add another specific product to basket 2", () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo')
    })
})