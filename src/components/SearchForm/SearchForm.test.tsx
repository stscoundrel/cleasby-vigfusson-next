import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import SeachForm from './index'

/**
 * Mock router
 */
jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: {
        query: 'madr',
        criteria: 'headword',
      },
    }
  },
}))

describe('SearchForm component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<SeachForm />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<SeachForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
