// cypress/support/pages/NavigationPage.js

class NavigationPage {
  visitInitialUrl() {
  
    cy.visit(Cypress.env('baseUrl'));
  }

  assertRedirectedUrl() {
    cy.url().should('include', Cypress.env('KiwiUrl'));
    cy.log('✅ Test Passed: Navigation Test Passed');
  }
}
export default NavigationPage;
