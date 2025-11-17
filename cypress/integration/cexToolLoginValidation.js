import LoginPage from '../support/pages/LoginPage';
// const loginPage = new LoginPage();
describe('CexTool Login Validations', () => {
    let loginPage;
    beforeEach(() => {
        loginPage = new LoginPage();
        loginPage.loadFixture();
        //cy.wrap(null).then(() => loginPage.loadFixture());
        cy.visit(Cypress.env('RedirectedUrl'));
    });

    it('should show error when username and password are blank', () => {
        cy.get('#cextools-btn').click();
        //loginPage.getUsernameError().should('contain', 'Please enter username');
        //loginPage.getPasswordError().should('contain', 'The Password field is required.');
        cy.get('#cextools-submit').click();
        //cy.get('span.field-validation-error')  // drop `.hide` if it's dynamic
        //.should('be.visible').and('contain', 'Please enter username'),
        // cy.get('input[data-valmsg-for="Username"]').should('contain', 'Please enter username')
cy.get('input[name="Username"]')
                .parent()
                .find('span.field-validation-error')
                .should('contain', 'Please enter username');
            cy.get('input[name="Password"]')
                .parent()
                .find('span.field-validation-error')
                .should('contain', 'Please enter password');

        cy.log('Test Passed - Validated blank username and password errors');


    })

});



/*it('should show error when username is incorrect', () => {
  cy.get('#cextools-btn').click();
  cy.get('#username').type('wrongUser');
  cy.get('#password').type('cexPass123');
  cy.get('#cextools-submit').click();
  LoginPage.getGlobalError().should('contain', 'Incorrect User Name or Password.');
});

it('should show error when password is incorrect', () => {
  cy.get('#cextools-btn').click();
  cy.get('#username').type('cexUser');
  cy.get('#password').type('wrongPass');
  cy.get('#cextools-submit').click();
  loginPage.getGlobalError().should('contain', 'Incorrect User Name or Password.');
});

it('should show error when both username and password are incorrect', () => {
  cy.get('#cextools-btn').click();
  cy.get('#username').type('WrongUser');
  cy.get('#password').type('wrongPass');
  cy.get('#cextools-submit').click();
  loginPage.getGlobalError().should('contain', 'Incorrect User Name or Password.');
});*/

