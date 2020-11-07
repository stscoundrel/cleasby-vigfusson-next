import { getContent, getSitemap } from 'lib/services/sitemap'

describe('Sitemap tests', () => {
  const content = getContent()

  test('Sitemap content is an array', () => {
    expect(Array.isArray(content)).toBeTruthy()
  })

  test('Sitemap content objects are in correct format.', () => {
    content.forEach((entry) => {
      expect(Object.prototype.hasOwnProperty.call(entry, 'url')).toBeTruthy()
      expect(Object.prototype.hasOwnProperty.call(entry, 'changefreq')).toBeTruthy()
      expect(Object.prototype.hasOwnProperty.call(entry, 'priority')).toBeTruthy()
    })
  })
})
