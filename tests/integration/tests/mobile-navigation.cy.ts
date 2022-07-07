it('Mobile navigation works', () => {
  cy.viewport('iphone-6')
  cy.visit('/')

  // Open mobile menu.
  cy.get('div[aria-label="Open menu"]').click({ force: true })

  // Navigate to letter page
  cy.get('a[href="/letter/a"]:visible').first().click({ force: true })
  cy.location('pathname').should('equal', '/letter/a')

  // Open menu again.
  cy.get('div[aria-label="Open menu"]').click({ force: true })

  // Click different letter
  cy.get('a[href="/letter/th"]:visible').first().click({ force: true })
  cy.location('pathname').should('equal', '/letter/th')
})

it('Mobile home icon works', () => {
  cy.viewport('iphone-6')
  cy.visit('/letter/a')

  // Click home button
  cy.get('img[alt="To home"]').click({ force: true })

  // Assert page was changed to home.
  cy.location('pathname').should('equal', '/')
})

export {};
