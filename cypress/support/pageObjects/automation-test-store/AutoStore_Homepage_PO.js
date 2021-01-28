class AutoStore_HomePage_PO {
    visitHomePage() {
        cy.visit("/")
    }

    goToHairCare(){
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    }
}

export default AutoStore_HomePage_PO


