//This testfile for Automationteststore uses pageObjects

import AutoStore_HomePage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO' //references a pageObject
import AutoStore_Haircare_PO from '../../support/pageObjects/automation-test-store/AutoStore_Haircare_PO'
import ShoppingCart_PO from '../../support/pageObjects/automation-test-store/AutoStore_ShoppingCart_PO'

/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
    const homePage_PO = new AutoStore_HomePage_PO
    const hairCarePage_PO = new AutoStore_Haircare_PO
    const shoppingCart_PO = new ShoppingCart_PO

    before(function(){
        cy.fixture("products").then(function(data){
            globalThis.data = data
        })
    })

    it("Add specific items to basket", () => {
        homePage_PO.visitHomePage()
        homePage_PO.goToHairCare()
        hairCarePage_PO.selectProducts() 
        cy.get('.dropdown-toggle .fa').click() //go to cart
    })

    it("Validate totalprice", () => {
        shoppingCart_PO.validateTotalPrice()
    })

})