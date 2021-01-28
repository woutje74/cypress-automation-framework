/// <reference types="cypress" />

describe('Navigate the log in screen of LinkedIn', () => {
    before('log in', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')

        expect(username, 'username was set').to.be.a('string').and.not.be.empty
        //expect(password, 'password was set').to.be.a('string').and.not.be.empty

        if(typeof password !== 'string' || !password){
            throw new Error('Missing password value, set using CYPRESS-password=...') //voorkomt dat password zichtbaar wordt in assertion message in testrunner
        }

        cy.visit('https://www.linkedin.com')
        cy.get('[action-type="ACCEPT"]').click()
        cy.get('a[href$="signin"]').click()
        cy.get('.header__content__heading').should('have.text', 'Sign in')
        cy.get('input[validation="email|tel"]').type(username)
        cy.get('input[name="session_password"]').type(password, {log: false}) //voorkomt dat password zichtbaar is tijdens plaatsen
        cy.get('button[aria-label="Sign in"]').click()

        Cypress.Cookies.preserveOnce('lidc', 
        'lang', 
        'li_at', 
        'AMCV_14215E3D5995C57C0A495C55%40AdobeOrg', 
        'AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg',
        'bcookie',
        '_ga',
        'PLAY_LANG',
        'li_rm',
        'li_gc',
        'li_mc',
        'JSESSIONID',
        'lissc',
        'liap',
        'visit',
        'bscookie',
        '_gid',
        'G_ENABLED_IDPS',
        'PLAY_SESSION', 
        'spectroscopyId', 
        )
    })

    it('Assert correct profile', () => {
        cy.get('a[href="/in/woutervanderzwet/"] > div[data-control-name="identity_welcome_message"]').should('include.text', 'Wouter Van der Zwet')
    })
    
    it('Create a message', () => {
        cy.get('.share-box-feed-entry__wrapper > .display-flex > .artdeco-button').click()
        cy.get('div[role="dialog"] > button[aria-label="Sluiten"]').click()
        // cy.get('div[aria-label="Waar wilt u het over hebben?"] > p').type('Mijn ontwikkeling in testautomatisering vordert gestaag. Op dit moment bezig met Cypress. Echt een gave testautomatiserings tool. Dit bericht is bijvoorbeeld geplaatst door een cypress test. To be continued! #cypress #testautomatisering')
        // cy.get('span').contains('Plaatsen').click()
    })

    

    // //after('Log out of Linkedin', () => {
    //     cy.get('#ember39').click()
    // })
})