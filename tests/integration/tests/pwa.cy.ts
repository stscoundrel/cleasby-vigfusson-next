describe('PWA support', () => {
  it('registers the production service worker and precaches the manifest', () => {
    cy.visit('/')
    cy.get('link[rel="manifest"]').should('have.attr', 'href', '/manifest.json')

    cy.window().then(async (window) => {
      const registration = await window.navigator.serviceWorker.ready
      expect(registration.scope).to.equal(`${window.location.origin}/`)
      expect(registration.active?.scriptURL).to.equal(
        `${window.location.origin}/sw.js`,
      )

      const manifest = await window.caches.match('/manifest.json', {
        ignoreSearch: true,
      })
      expect(manifest?.ok).to.equal(true)
    })
  })
})
