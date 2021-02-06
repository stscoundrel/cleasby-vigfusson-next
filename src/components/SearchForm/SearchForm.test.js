import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { getAllWords } from 'lib/services/dictionary'
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
  const dictionary = getAllWords()

  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SeachForm words={dictionary} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<SeachForm words={dictionary} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
