import { createMocks } from 'node-mocks-http'
import searchHandler from 'pages/api/search'

describe('Search API endpoint', () => {
  test('Should error if missing query params', async () => {
    const { req, res } = createMocks()

    // Ensure response is blank.
    expect(res.finished).toBeFalsy()
    expect(res._headers).toEqual({})

    // Setup invalid query params
    req.query = {
      foo: 'bar',
    }

    await searchHandler(req, res)

    // Should've received 422 bad request
    expect(res.finished).toBeTruthy()
    expect(res.statusCode).toBe(422)
  })

  test('Should return search results', async () => {
    const { req, res } = createMocks()

    // Ensure response is blank.
    expect(res.finished).toBeFalsy()
    expect(res._headers).toEqual({})

    // Setup valid query params
    req.query = {
      search: 'madr',
      criteria: 'headword',
    }

    await searchHandler(req, res)
    const response = JSON.parse(res._getData())

    // Should be valid response with results
    expect(res.finished).toBeTruthy()
    expect(res.statusCode).toBe(200)
    expect(response.length).toEqual(150)
    expect(response).toMatchSnapshot()
  })
})
