it('Back button works', () => {
  // Ensure screen is large enough for desktop menu.
  cy.viewport('macbook-15')

  // First visit target page to ensure it's build for client navigaiton.
  cy.visit('/letter/a')
  cy.visit('/word/abbindi')

  // Start main test.
  cy.visit('/letter/a')
  cy.wait(5000)

  // Got o a word page.
  cy.contains('abbindi').click({ force: true });
  cy.location('pathname').should('equal', '/word/abbindi')

  // Try to go back using "back" button.
  cy.contains('Back').click({ force: true })
  cy.location('pathname').should('equal', '/letter/a')
})
