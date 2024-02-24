import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import ExternalLink from './index'

describe('ExternalLink component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<ExternalLink title="Other site" href="www.takemeontheotherside.com" />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<ExternalLink title="Other site" href="www.takemeontheotherside.com" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct title', () => {
    const tree = renderer.create(<ExternalLink title="Other site" href="www.takemeontheotherside.com" />)
    const { root } = tree

    expect(root.findByType('a').children).toEqual(['Other site'])
  })

  test('Has correct url', () => {
    const tree = renderer.create(<ExternalLink title="Other site" href="www.takemeontheotherside.com" />).toJSON()

    expect(tree.props.href).toEqual('www.takemeontheotherside.com')
  })
})
