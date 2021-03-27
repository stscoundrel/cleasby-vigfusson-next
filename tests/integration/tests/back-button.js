it('Back button works', () => {
  cy.visit('/letter/a');

  // Got o a word page.
  cy.contains('abbindi').click();
  cy.location('pathname').should('equal', '/word/abbindi');

  // Try to go back using "back" button.
  cy.contains('Back').click();
  cy.location('pathname').should('equal', '/letter/a');
})
