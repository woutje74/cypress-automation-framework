/// <reference types="Cypress" />
describe("Handling data tables", () => {
    beforeEach(() => {
      cy.visit(Cypress.env("webdriveruni_homepage")); //refers to the environment variable in cypress.json
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
      it("Calculate and assert the total age of all users", () => {
        var userDetails =[]
        let totalAge = 0
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
            cy.log(userDetails[index])
        }).then(() => {
            var i;
            for(i=0; i<userDetails.length; i++){
                if(Number(userDetails[i])){
                    totalAge += Number(userDetails[i])
                }
            }
            cy.log('Total age is: ' + totalAge).then(()=>{
                expect(totalAge).to.equal(322)  
            })
        })
      });

      // two ways of getting specific data from a table
      it("Assert age of a given user based on last name", () => { 
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Woods')){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age)=>{
                    const userAge = age.text();
                    expect(userAge).to.equal('80')
                })
            }
        })
      })

      it("Assert age of a given user based on last name", () => {
        cy.get('#thumbnail-1 td').contains('Woods').next().then((age)=>{
                    const userAge = age.text();
                    expect(userAge).to.equal('80')
                })
        })
  });