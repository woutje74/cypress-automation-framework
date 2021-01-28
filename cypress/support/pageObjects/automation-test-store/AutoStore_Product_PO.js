class AutoStore_Product_PO {

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
                    cy.log('Product in store: ' + $product)
                    cy.wait(1000)
                    cy.get('.fixed_wrapper .prdocutname').eq(i).click()
                    cy.get(".productinfo > li:nth-child(1)").then((element)=>{ 
                        //then is used to convert element content to a string variable for assertion
                        let test = element.text()
                        expect(test).to.include('In Stock')
                    })
                    
                } 
            }
        })
    }

}

export default AutoStore_Product_PO