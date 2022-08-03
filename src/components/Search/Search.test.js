import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import Search from './index'

const mockHandler = jest.fn()
const mockEvent = jest.fn()
mockEvent.preventDefault = jest.fn()

/**
 * Mock router
 */
jest.mock('next/router', () => ({
  useRouter() {
    return {
      locale: undefined,
      defaultLocale: undefined,
      asPath: '/test',
      push: mockHandler,
    }
  },
}))

describe('Search component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Search />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Search />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Triggers router action when submitted', () => {
    const tree = renderer.create(<Search />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Triggers callback after click', async () => {
    const tree = renderer.create(
      <Search />,
    )

    // Submit search form.
    await renderer.act(async () => {
      expect(mockHandler).not.toHaveBeenCalled()

      await tree.root.findByType('form').props.onSubmit(mockEvent)

      // Assert mockrouter received a push.
      expect(mockHandler).toHaveBeenCalled()
      expect(mockHandler).toHaveBeenCalledWith('/search/?query=')
      expect(mockHandler.mock.calls.length).toBe(1);
    })
  })
})
