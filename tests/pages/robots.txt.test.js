import ReactDOM from 'react-dom'
import Robots, { getServerSideProps } from 'pages/robots.txt'
import renderer from 'react-test-renderer'
import { createMocks } from 'node-mocks-http'

describe('Robots.txt page: render', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://cleasbyvigfusson.test'

  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Robots />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Robots />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Robots.txt page: data fetching', () => {
  test('getServerSideProps forces plaintext response', async () => {
    const { res } = createMocks()

    // Ensure response is blank.
    expect(res.finished).toBeFalsy()
    expect(res._headers).toEqual({}) // eslint-disable-line

    await getServerSideProps({ res })

    // Ensure getServerSideProps modified response.
    expect(res.finished).toBeTruthy()
    expect(res._headers).toEqual({ 'content-type': 'text/plain' }) // eslint-disable-line

    expect(res._getData().includes('Sitemap: https://cleasbyvigfusson.test/sitemap.xml')).toBeTruthy() // eslint-disable-line
  })
})
