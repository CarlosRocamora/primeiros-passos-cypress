class Maintenance {

  selectorsList(){

    const selectors = {
      cancelButton: "[type='button']"
    }

    return selectors
  }

  administratorAccess(){
    cy.get(this.selectorsList().cancelButton).click({force: true})

  }


}

export default Maintenance