import { createRenderer, renderToDOM, act } from '../../../tests/helpers/react'
import SeachForm from './index'

const mockQuery = { query: 'madr', criteria: 'headword' }

/**
 * Mock router
 */
jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: mockQuery,
    }
  },
}))

const originalFetch = globalThis.fetch

beforeEach(() => {
  globalThis.fetch = jest.fn().mockResolvedValue({
    json: async () => [],
  })
})

afterEach(() => {
  globalThis.fetch = originalFetch
})

describe('SearchForm component', () => {
  test('Does not crash', async () => {
    await act(async () => {
      renderToDOM(<SeachForm />)
    })
  })

  test('Matches snapshot', async () => {
    let tree: ReturnType<typeof createRenderer>
    await act(async () => {
      tree = createRenderer(<SeachForm />)
    })
    expect(tree!.toJSON()).toMatchSnapshot()
    expect(globalThis.fetch).toHaveBeenCalledWith(
      '/api/search?search=madr&criteria=headword',
    )
  })
})
