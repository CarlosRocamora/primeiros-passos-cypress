import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import Maintenance from '../pages/maintenancePage'

const loginPage = new LoginPage()
const dashBoardPage = new DashBoardPage()
const menuPage = new MenuPage()
const maintenancePage = new Maintenance()

describe('Orange HRM Tests', () => {

  const selectorsList = {

    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    middleNameField: "[name='middleName']",
    genericField: ".oxd-input",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    nationalityComboBox: ".oxd-select-text--arrow",
    nationalitySelect: "[role='option']"
  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashBoardPage.checkDashBoardPage()
    
    menuPage.accessMyInfo()
    
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('Generic4')
    cy.get(selectorsList.genericField).eq(5).clear().type('Generic5')
    cy.get(selectorsList.genericField).eq(6).clear().type('Generic6')
    cy.get(selectorsList.dateField).eq(0).clear().type('2003-23-04')
    cy.get(selectorsList.dateCloseButton).click({force: true})
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    //cy.get(selectorsList.nationalityComboBox).eq(0).click({force: true})
    //cy.get(selectorsList.nationalitySelect).eq(3).click({force: true})
    cy.get(selectorsList.nationalityComboBox).eq(1).click({force: true})
    cy.get(selectorsList.nationalitySelect).eq(3).click({force: true})
    
    menuPage.accessPerformance()
    menuPage.accessDashBoard()
    menuPage.accessDirectory()
    menuPage.accessMaintenance()
    maintenancePage.administratorAccess()
    menuPage.accessClaim()
    menuPage.accessBuzz()
    
    
  })
  it('Login - Fail', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})