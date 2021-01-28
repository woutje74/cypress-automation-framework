/// <reference types='cypress' />

describe('How to handle dropdown autocomplete lists', () => {
    it('Select specific product via autocomplete', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force: true})
        .then(() => {
            cy.get('#myInput').type('A')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text()
                const productToSelect = 'Avacado'
                if (prod === productToSelect){
                    cy.wrap($el).click()
                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelect)
                    }
                })
            }) //end of 1st then
            .then(() => {
                cy.get('#myInput').type('G')
                cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                    const prod = $el.text()
                    const productToSelect = 'Grapes'
                    if (prod === productToSelect){
                       cy.wrap($el).click()
                       cy.get('#submit-button').click()
                       cy.url().should('include', productToSelect)
                    }
                })
            }) //end of 2nd then
    }) // end of 1st it()

    // it('Using then to select an item', () =>{
    //     cy.get('#myInput').type('G')
    //     cy.get('#myInputautocomplete-list > *').then($list => {
    //         cy.get('input[value="Grapes"]').click({force: true})
    //         cy.get('#submit-button').click()
    //         cy.url().should('include', 'Grapes')
    //         })    
        

    // }) //end of 2nd it()
    
})