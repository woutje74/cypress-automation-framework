/// <reference types="cypress" />

describe("Test date pickers", () => {

    it.only("Pick a specific data", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force: true})
        cy.get('#datepicker').click()

        // let date = new Date();
        // date.setDate(date.getDate()) //get current day
        // cy.log(date.getDate())

        // let date2 = new Date();
        // date2.setDate(date2.getDate() + 8)
        // cy.log(date2.getDate())
        
        var date = new Date()
        date.setDate(date.getDate() + 360)

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", {month: "long"});
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear)
        cy.log("Future month to select: " + futureMonth)
        cy.log("Future day to select: " + futureDay)

        function selectMonthAndYear(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click()
                    selectMonthAndYear();
                }
            }).then(()=>{
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click()
                        selectMonthAndYear();
                    }
                })
            })
        };

        function selectFutureDay(){
            cy.get('[class="day"]').contains(futureDay).click()
        }

        selectMonthAndYear();
        selectFutureDay();
    })

    // een andere code om een bepaalde datum te selecteren.
    it.only('Another way to select a date', ()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force: true})
        cy.get('#datepicker').click()

        var date = new Date()
        date.setDate(date.getDate() + 360)

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", {month: "long"});
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear)
        cy.log("Future month to select: " + futureMonth)
        cy.log("Future day to select: " + futureDay)

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear) ) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                } else if(!currentDate.text().includes(futureMonth) ) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }else{
                    cy.get('[class="day"]').contains(futureDay).click();
                }                
            })            
        }
        selectMonthAndYear();
    })
})