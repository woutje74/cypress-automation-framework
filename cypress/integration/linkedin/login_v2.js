/// <reference types="cypress" />

describe('Navigate the log in screen of LinkedIn', () => {
    before('log in', () => {
        cy.linkedInLogin()
        cy.fixture("linkedin-message").then(function(data){
            globalThis.data=data
        })
    })

    it('Assert correct profile', () => {
        cy.get('a[href="/in/woutervanderzwet/"] > div[data-control-name="identity_welcome_message"]').should('include.text', 'Wouter Van der Zwet')
    })
    
    it('Create a message', () => {
        cy.get('.share-box-feed-entry__wrapper > .display-flex > .artdeco-button').click()
        cy.get('div[aria-label="Waar wilt u het over hebben?"] > p').type(globalThis.data.message)
        cy.get('span').contains('Plaatsen').click()
    })

    // after('Log out of Linkedin', () => {
    //     cy.get('#ember39').click()
    // })
})