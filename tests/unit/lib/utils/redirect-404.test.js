import { redirect404 } from 'lib/utils/redirect-404'

describe('404 redirect object', () => {
  test('Contains not found key', () => {
    const result = redirect404()

    expect(result.notFound).toBeTruthy()
  })
})
