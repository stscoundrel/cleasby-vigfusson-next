import { getSitemapContent, formatSitemap } from 'lib/services/sitemap'
import { SitemapStream, streamToPromise } from 'sitemap'

describe('Sitemap tests', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://cleasbyvigfusson.test'
  const content = getSitemapContent()

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

  test('Sitemap content can be formatted to XML.', async () => {
    const result = await formatSitemap(content, SitemapStream, streamToPromise)

    expect(result.includes('<?xml version="1.0" encoding="UTF-8"?>')).toBeTruthy()
    expect(result.includes('<url><loc>https://cleasbyvigfusson.test/word/al-blindr</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>')).toBeTruthy()
  })
})
