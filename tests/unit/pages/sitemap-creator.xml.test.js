import { createRenderer, renderToDOM } from '../../helpers/react'
import { createMocks } from 'node-mocks-http'
import Sitemap, { getServerSideProps } from 'pages/sitemap-creator.xml'

describe('Sitemap page: render', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://cleasbyvigfusson.test'

  test('Does not crash', () => {
    renderToDOM(<Sitemap />)
  })

  test('Matches snapshot', () => {
    const tree = createRenderer(<Sitemap />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Sitemap page: data fetching', () => {
  test('getServerSideProps forces xml response', async () => {
    const { res } = createMocks()

    // Ensure response is blank.
    expect(res.finished).toBeFalsy()
    expect(res._headers).toEqual({})

    await getServerSideProps({ res })

    // Ensure getServerSideProps modified response.
    expect(res.finished).toBeTruthy()
    expect(res._headers).toEqual({ 'content-type': 'text/xml' })

    expect(
      res._getData().includes('<?xml version="1.0" encoding="UTF-8"?>'),
    ).toBeTruthy()
    expect(
      res
        ._getData()
        .includes(
          '<url><loc>https://cleasbyvigfusson.test/word/al-blindr</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>',
        ),
    ).toBeTruthy()
  })
})
