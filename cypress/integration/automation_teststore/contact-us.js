/// <reference types="cypress" />

describe("Test Contact Us from via Automationteststore", () => {
    before(function(){
        cy.fixture("userDetails").as("user")
    })

    it("should be able to perform succesful submission", () => {
        cy.visit('http://www.automationteststore.com/')
        //cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        //cy.xpath("//a[contains(@href, 'contact')]").click({multiple: true})
        cy.get("a[href$='contact']").click().then(function(textButton){
            cy.log("Button text is: " + textButton.text())
        }) // dynamic selector
        cy.get("@user").then((user)=>{
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })

        //cy.xpath("//input[contains(@name, 'first_name')]").type("Carl")
              cy.get('#ContactUsFrm_enquiry').type("Comment")
        cy.get('button[title="Submit"]').click()
          //cy.xpath("//nav[@class='subnav']/ul/li/a[contains(text(),'Makeup')]").click()
        cy.get('.mb40').find('p').eq(1).should('have.text','Your enquiry has been successfully sent to the store owner!')
        cy.get('.mb40 p').should('have.text','Your enquiry has been successfully sent to the store owner!')
        //cy.contains('Your enquiry has been successfully sent to the store owner!')
        cy.log('Test completed')
    })

})