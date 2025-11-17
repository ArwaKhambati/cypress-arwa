/*Cypress.Commands.add('simulateTagScan', (tagNumber) => {
  cy.get('#tagNumber[data-input-type="scanner"]')
    .invoke('val', tagNumber)
    .type('{enter}', { force: true }); // simulate Enter key
});*/
Cypress.Commands.add('simulateTagScan', (tagNumber) => {
  cy.get('[name="tagNumber"]')
    .invoke('val', tagNumber)
    .type('{enter}', { force: true }); // simulate Enter key
});



