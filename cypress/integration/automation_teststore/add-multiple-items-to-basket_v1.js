/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
    before(function(){
        
        cy.fixture("products").then(function(data){
            globalThis.data = data
        })
    })
    beforeEach(function () { 
        cy.visit("/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })

    it("Add specific items to basket", () => {
        let productPrice=[]
        let totalPrice = 0
        globalThis.data.productName.forEach(function(element){
            cy.addProductToBasket(element) // add selected products from product.json to cart
        })
        cy.get('.dropdown-toggle .fa').click() //go to cart
        
        //The following steps are created to verify that the totalamount of all items in the cart equal the amount shown at subtotal
        cy.get('.product-list .table td:nth-child(6)').each(($el, index, $list) => {
            productPrice[index] = $el.text().substring(1) //store all cart item prices in an array
            cy.log(productPrice[index])
        }).then(()=>{  
            var i
            for(i=0;i<productPrice.length;i++){ //iterate over the array and add the item prices
                if(Number(productPrice[i])){
                    totalPrice += Number(productPrice[i])
                }
            }        
            cy.log('Total price is: ' + totalPrice)
         }).then(()=> {
            cy.get('#totals_table td:nth-child(2)').eq(0).then((element)=>{
                let totalAmount = Number(element.text().substring(1))
                expect(totalAmount).to.equal(totalPrice) //assert subtotal is equal to sum of all itemprices
            })    
         })
    
    })

})