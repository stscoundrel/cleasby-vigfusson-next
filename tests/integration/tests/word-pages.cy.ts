describe('Word pages', () => {
  it('Loads Kvik-Fénaðr', () => {
    cy.visit('/word/kvik-fenadr')
  })

  it('Loads Skilja', () => {
    cy.visit('/word/skilja')
  })

  it('Loads Spyrja', () => {
    cy.visit('/word/spyrja')
  })

  it('Loads Jafningi', () => {
    cy.visit('/word/jafningi')
  })
})

export {};
