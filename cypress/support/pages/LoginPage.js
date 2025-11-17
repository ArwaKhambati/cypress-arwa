// cypress/support/pages/LoginPage.js

class LoginPage {
  /*constructor() {
    this.loginData = null;
  }*/
  loadFixture() {
    return cy.fixture('loginData').then((data) => {
      this.loginData = data;
    });
 
  }

  visitLoginPage() {
    cy.visit(Cypress.env('RedirectedUrl')); // or use full URL if needed
  }
  
    // 1. Tag Scan Login
    performTagScanLogin() {
    cy.get('#stafftag-btn').click();
    //cy.get('[name="tagNumber"]').type('_130676_');
    //cy.get('[name="tagNumber"]').type('_130676\x07');
      cy.simulateTagScan(this.loginData.tagScan.tagNumber);
      //cy.get('#tag-scgetan-submit').click();
    }
      


  // 2. CexTool Login
  /*performCexToolLogin() {
    cy.get('#cextools-btn').click();
    cy.get('#username').type(this.loginData.cexTool.username);
    cy.get('#password').type(this.loginData.cexTool.password);
    cy.get('#cextools-submit').click();
    
  }
  //2.1 Cextool Login - Error Messages

     getUsernameError() {
    return cy.get('input[name="username"]'); // adjust selector as needed
  }


  getPasswordError() {
    return cy.get('input[name="Password"]'); // adjust selector as needed
  }

  /*getGlobalError() {
    return cy.get('.alert alert-danger'); // for incorrect credentials
  }

  getSuccessMessage() {
    return cy.contains('Login successful'); // or use a specific selector
  }*/


  // 3. Webuy Login
  /* performWebuyLogin(email, password) {
     cy.get('#button webuy-btn').click();
     cy.get('#webuy-email').type(email);
     cy.get('#webuy-password').type(password);
     cy.get('#webuy-login-button').click();
   }*/

  // Common assertion
 /* assertLoginSuccess() {
    cy.log('✅ Test Passed: CexTool login performed successfully');
    cy.url().should('include', Cypress.env('baseUrl'));
    cy.contains('Select Branch').should('be.visible');
    
  }*/
}

export default LoginPage;
