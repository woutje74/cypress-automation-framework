/// <reference types="cypress" />

describe("JSON object", () => {

    it("JSON Object examples", () => {
        const exampleObject = {
            "key":"Tim",
            "key2":"Jones"        
        }
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]

        const exampleArrayOfObjects =[{"employeeFirstName":"Martin"},{"employeeLastName":"Charles"},{"Department":"IT"}]

        const users = { 
            "firstName":"Joe",
            "lastName":"Blogs",
            "Age": 25,
            "Student": [
                {
                    "firstName":"Jim",
                    "lastName":"Butcher",

                },
                {
                    "firstName":"Sarah",
                    "lastName":"Parker",
                }
            ]
        }
        cy.log(exampleObject["key"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.key2)

        cy.log(exampleArrayOfValues[0])
        cy.log(exampleArrayOfValues[1])

        cy.log(users.Student[0].lastName)

        cy.log(exampleArrayOfObjects[0].employeeFirstName)
        cy.log(exampleArrayOfObjects[1].employeeLastName)
        cy.log(exampleArrayOfObjects[2].Department)
    })
})