class AutoStore_Haircare_PO {

    selectProducts(){
        globalThis.data.productName.forEach(function(element){ // add selected products from product.json to cart
            cy.addProductToBasket(element)
        })
    }

    validateProduct($product){
        let item = []
        cy.log('Looking for: ' + $product)
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=>{
            item.push($el.text())
        }).then(()=>{
            let i
            for(i=0;i<item.length;i++){
                if(item[i] === $product){
                    cy.get('.fixed_wrapper .prdocutname').eq(i).scrollIntoView()
                    cy.wait(2000)
                    cy.get('.fixed_wrapper .prdocutname').eq(i).click()
                    cy.get(".productinfo > li:nth-child(1)").contains('In Stock')
                    cy.log('Product available: ' + $product)
                } 
            }
        })
    }

}

export default AutoStore_Haircare_PO