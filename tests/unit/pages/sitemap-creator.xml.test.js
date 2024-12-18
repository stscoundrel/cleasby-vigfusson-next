import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import { createMocks } from 'node-mocks-http'
import Sitemap, { getServerSideProps } from 'pages/sitemap-creator.xml'

describe('Sitemap page: render', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://cleasbyvigfusson.test'

  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Sitemap />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Sitemap />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Sitemap page: data fetching', () => {
  test('getServerSideProps forces xml response', async () => {
    const { res } = createMocks()

    // Ensure response is blank.
    expect(res.finished).toBeFalsy()
    expect(res._headers).toEqual({}) // eslint-disable-line

    await getServerSideProps({ res })

    // Ensure getServerSideProps modified response.
    expect(res.finished).toBeTruthy()
    expect(res._headers).toEqual({ 'content-type': 'text/xml' }) // eslint-disable-line

    expect(res._getData().includes('<?xml version="1.0" encoding="UTF-8"?>')).toBeTruthy() // eslint-disable-line
    expect(res._getData().includes('<url><loc>https://cleasbyvigfusson.test/word/al-blindr</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>')).toBeTruthy() // eslint-disable-line
  })
})
