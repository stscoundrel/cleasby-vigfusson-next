it('Desktop navigation works', () => {
  // Ensure screen is large enough for desktop menu.
  cy.viewport('macbook-15')

  cy.visit('/')

  cy.get('a[href="/letter/a"]:visible').first().click()
  // Go to a letter page from nav link.
  cy.location('pathname').should('equal', '/letter/a')

  // Navigate to another letter
  cy.get('a[href="/letter/b"]:visible').first().click()
  cy.location('pathname').should('equal', '/letter/b')
})
