/// <reference types="cypress" />

describe("Alias and invoke", () => {

    it("Validate a specific haircare product", () => {
        cy.visit("http://www.automationteststore.com")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        //invoke('text') haalt de text op. .as('') vervangt alle voorliggende tekst door de variable 'productThumbnail'
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
        })

    it('Challenge chapter 82 Alias & Invoke', () => {
        cy.visit("/") //refers to baseUrl in cypress.json
        cy.get('.thumbnail').as('thumbnail')
        cy.get('@thumbnail').its('length').should('equal', 16)
        cy.get('@thumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it('Calculate total of all products', () => {
        cy.visit("http://www.automationteststore.com")
        cy.get('.thumbnail').as('thumbnail')
        // cy.get('@thumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        // })

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('salePrice')

        var allItemsTotal = 0
        var itemPriceTotal = 0
        var salesItemTotal = 0
        
        cy.get('@itemPrice').then($linkText => {
            var itemPrices = $linkText.split('$'); //creates an array with all prices
            var i;
            for(i = 0; i<itemPrices.length; i++){
                itemPriceTotal += Number(itemPrices[i])
            }
            allItemsTotal += itemPriceTotal
            cy.log("Non sale price items total: " + allItemsTotal)
        })

        cy.get('@salePrice').then($linkText => {
            var salePrices = $linkText.split('$');
            var i;
            for(i = 0; i<salePrices.length; i++){
                salesItemTotal += Number(salePrices[i])
            }
            cy.log("Sale price items total: " + salesItemTotal)
            allItemsTotal += salesItemTotal
            
        })
        .then(() => {
            cy.log("Total price all items: " + allItemsTotal)
            expect(allItemsTotal).to.equal(salesItemTotal+itemPriceTotal)
        })
        
    })

})