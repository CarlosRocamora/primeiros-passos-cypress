class MenuPage {
  
    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            dashBoardButton: "[href='/web/index.php/dashboard/index']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']",

        }

        return selectors
    }


    accessMyInfo() {
      cy.get(this.selectorsList().myInfoButton).click({force: true})
    }

    accessPerformance() {
      cy.get(this.selectorsList().performanceButton).click({force: true})
    }

    accessDashBoard() {
      cy.get(this.selectorsList().dashBoardButton).click({force: true})
    }

    /*accessDirectory() {
      cy.get(this.selectorsList().directoryButton).click({force: true})
    }

    accessMaintenance() {
      cy.get(this.selectorsList().maintenanceButton).click({force: true})

    }

    accessClaim() {
      cy.get(this.selectorsList().claimButton).click({force: true})
    }

    accessBuzz() {
      cy.get(this.selectorsList().buzzButton).click({force: true})
    }
*/
}

export default MenuPage