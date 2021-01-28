/// <reference types="cypress" />

describe("Test for various mouse actions", () => {

    it("Scroll element into view", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
    })

    it("Drag and drop an element", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})

        cy.get('#draggable').trigger('mousedown', {which: 1}) //click and holddown center of draggable element
        
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})
    })

    it("Perform a double mouseclick", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})

        cy.get('#double-click').dblclick()
    })

    it("Click and hold", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})

        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($el) => {
            expect($el).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    })


})