import { createMocks } from 'node-mocks-http'
// eslint-disable-next-line import/no-unresolved
import revalidateHandler from 'pages/api/revalidate'

describe('Revalidate  API endpoint', () => {
  test('Should error if incorrect secret', async () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://cleasby-vigfusson-test.test'
    process.env.REVALIDATE_SECRET = 'test-secret'

    const { req, res } = createMocks()

    // Ensure response is blank.
    expect(res.finished).toBeFalsy()
    expect(res._headers).toEqual({}) // eslint-disable-line

    // Setup query params for revalidate.
    req.query = {
      secret: 'wrong-secret',
      start: 0,
      end: 500,
    }

    // Append fake for Next.js specific method.
    const mockRevalidate = jest.fn()
    res.revalidate = mockRevalidate

    await revalidateHandler(req, res)

    // Should've received unauthorized response
    expect(res.finished).toBeTruthy()
    expect(res.statusCode).toBe(401)
    expect(mockRevalidate).toBeCalledTimes(0)
  })

  test('Should error if query params not given', async () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://cleasby-vigfusson-test.test'
    process.env.REVALIDATE_SECRET = 'test-secret'

    const { req, res } = createMocks()

    // Ensure response is blank.
    expect(res.finished).toBeFalsy()
    expect(res._headers).toEqual({}) // eslint-disable-line

    // Setup query params for revalidate.
    req.query = {
      secret: 'test-secret',
      // Omit start & end to cause error
    }

    // Append fake for Next.js specific method.
    const mockRevalidate = jest.fn()
    res.revalidate = mockRevalidate

    await revalidateHandler(req, res)

    // Should've received bad request error
    expect(res.finished).toBeTruthy()
    expect(res.statusCode).toBe(400)
    expect(mockRevalidate).toBeCalledTimes(0)
  })

  test('Should call revalidate', async () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://cleasby-vigfusson-test.test'
    process.env.REVALIDATE_SECRET = 'test-secret'

    const { req, res } = createMocks()

    // Ensure response is blank.
    expect(res.finished).toBeFalsy()
    expect(res._headers).toEqual({}) // eslint-disable-line

    // Setup query params for revalidate.
    req.query = {
      secret: 'test-secret',
      start: '0',
      end: '500',
    }

    // Append fake for Next.js specific method.
    const mockRevalidate = jest.fn()
    res.revalidate = mockRevalidate

    await revalidateHandler(req, res)

    // Should've received call for each word.
    expect(res.finished).toBeTruthy()
    expect(res.statusCode).toBe(200)
    expect(mockRevalidate).toBeCalledTimes(500)
  })
})
