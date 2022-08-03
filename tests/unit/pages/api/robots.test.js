import { createMocks } from 'node-mocks-http'
// eslint-disable-next-line import/no-unresolved
import robotsHandler from 'pages/api/robots'

describe('Robots.txt  API endpoint', () => {
  test('Should output robots.txt response', async () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://cleasby-vigfusson-test.test'

    const { req, res } = createMocks()

    // Ensure response is blank.
    expect(res.finished).toBeFalsy()
    expect(res._headers).toEqual({}) // eslint-disable-line

    await robotsHandler(req, res)

    expect(res.finished).toBeTruthy()
    expect(res._headers).toEqual({ 'content-type': 'text/plain' }) // eslint-disable-line

    expect(res._getData().includes('Sitemap: https://cleasby-vigfusson-test.test/sitemap.xml')).toBeTruthy() // eslint-disable-line
  })
})
