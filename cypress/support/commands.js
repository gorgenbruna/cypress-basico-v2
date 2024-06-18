Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Bruna');
    cy.get('#lastName').type('Gorgen');
    cy.get('#email').type('brunagorgen@exemplo.com');
    cy.get('#open-text-area').type('teste');
    cy.contains('button', 'Enviar').click();
})
