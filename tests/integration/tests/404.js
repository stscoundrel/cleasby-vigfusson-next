describe('404 page', () => {
  it('Loads 404 page', () => {
    cy.visit('/totally-not-here', { failOnStatusCode: false })
  })
})
