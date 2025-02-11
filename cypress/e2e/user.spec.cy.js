import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import Maintenance from '../pages/maintenancePage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashBoardPage = new DashBoardPage()
const menuPage = new MenuPage()
const maintenancePage = new Maintenance()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashBoardPage.checkDashBoardPage()

    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('First Name', 'Middle Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherId', 'Drivers Number','2003-23-04')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    

    /*menuPage.accessPerformance()
    menuPage.accessDashBoard()
    menuPage.accessDirectory()
    menuPage.accessMaintenance()
    maintenancePage.administratorAccess()
    menuPage.accessClaim()
    menuPage.accessBuzz()
    */
    
  })
  
})