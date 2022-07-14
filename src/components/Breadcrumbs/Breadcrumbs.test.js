import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import Breadcrumbs from './index'

describe('Breadcrumbs component', () => {
  test('Default page: does not crach', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Breadcrumbs type="page" />)
  })

  test('Default page: matches snapshot', () => {
    const tree = renderer.create(<Breadcrumbs type="page" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Default page: renders correct amount of breadcrumbs', () => {
    const tree = renderer.create(<Breadcrumbs type="page" />)
    const { root } = tree

    expect(root.findAllByType('a').length).toEqual(1)
  })

  test('Letter page: does not crach', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Breadcrumbs type="letter" content={[{ word: 'random' }]} />)
  })

  test('Letter page: matches snapshot', () => {
    const tree = renderer.create(<Breadcrumbs type="letter" content={[{ word: 'random' }]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Letter page: renders correct amount of breadcrumbs', () => {
    const tree = renderer.create(<Breadcrumbs type="letter" content={[{ word: 'random' }]} />)
    const { root } = tree

    expect(root.findAllByType('a').length).toEqual(2)
  })

  test('Word page: does not crach', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Breadcrumbs type="word" content={{ word: 'random' }} />)
  })

  test('Word page: matches snapshot', () => {
    const tree = renderer.create(<Breadcrumbs type="word" content={{ word: 'random' }} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Word page: renders correct amount of breadcrumbs', () => {
    const tree = renderer.create(<Breadcrumbs type="word" content={{ word: 'random' }} />)
    const { root } = tree

    expect(root.findAllByType('a').length).toEqual(3)
  })
})
