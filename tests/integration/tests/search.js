it('Search bar works', () => {
  // Ensure screen is large enough for desktop menu.
  cy.viewport('macbook-15')

  cy.visit('/')

  // Type in search bar.
  cy.get('input[type="search"]').first().type('skilja')
  cy.get('button[type="submit"').click()

  // Assert we entered search page with correct param.
  cy.location('pathname').should('equal', '/search')
  cy.location('search').should('equal', '?query=skilja')
})

it('Search page keeps searched keyword in url updated', () => {
  // Ensure screen is large enough for desktop menu.
  cy.viewport('macbook-15')

  cy.visit('/search')

  // Type in search bar.
  cy.get('input[type="search"]').last().type('spyrja')
  cy.get('button[type="submit"').click()

  // Assert query params were updated
  cy.location('pathname').should('equal', '/search')
  cy.location('search').should('contain', 'query=spyrja')
})

it('Search page keeps criterias in url', () => {
  // Ensure screen is large enough for desktop menu.
  cy.viewport('macbook-15')

  cy.visit('/search')

  // Type in search bar.
  cy.get('input[type="search"]').last().type('spyrja')

  // Change condition
  cy.get('input[name="headword"]').click()
  cy.get('button[type="submit"').click()

  // Assert query params were updated
  cy.location('pathname').should('equal', '/search')
  cy.location('search').should('contain', 'criteria=headword')
})

it('Search page yields expected amount of results', () => {
  // Ensure screen is large enough for desktop menu.
  cy.viewport('macbook-15')

  cy.visit('/search')

  // Search for "madr" in headwords
  cy.get('input[type="search"]').last().type('madr')
  cy.get('input[name="headword"]').click()
  cy.get('button[type="submit"').click()

  // Should find 503 headwords.
  cy.get('main > ul').last().find('> li').should('have.length', 503)

  // Search for "spyrja" in headwords
  cy.get('input[type="search"]').last().clear().type('spyrja')
  cy.get('button[type="submit"').click()

  // Should find 1 result.
  cy.get('main > ul').last().find('> li').should('have.length', 1)
})
