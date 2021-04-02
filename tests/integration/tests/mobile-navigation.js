it('Mobile navigation works', () => {
  cy.viewport('iphone-6')
  cy.visit('/')

  // Open mobile menu.
  cy.get('div[aria-label="Open menu"]').click()

  // Navigate to letter page
  cy.get('a[href="/letter/a"]:visible').first().click()
  cy.location('pathname').should('equal', '/letter/a')

  // Open menu again.
  cy.get('div[aria-label="Open menu"]').click()

  // Click different letter
  cy.get('a[href="/letter/th"]:visible').first().click()
  cy.location('pathname').should('equal', '/letter/th')
})
