class ShoppingCart_PO{
    validateTotalPrice(){
    //The following steps are created to verify that the totalamount of all items in the cart equal the amount shown at subtotal
        let productPrice=[]
        let totalPrice = 0
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
    }

    totalPriceItems(){
        cy.get('.thumbnail').as('thumbnail')
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
    }
}

export default ShoppingCart_PO