import { slugifyLetter, decodeLetter, slugifyWord } from 'lib/utils/slugs'

describe('Slug utils', () => {
  test('Slugifys letters', () => {
    expect(slugifyLetter('ú')).toEqual('u2')
    expect(slugifyLetter('í')).toEqual('i2')
    expect(slugifyLetter('ǫ')).toEqual('oe4')
    expect(slugifyLetter('a')).toEqual('a')
  })

  test('Slugifys words', () => {
    expect(slugifyWord('äimänkäki')).toEqual('aimankaki')
  })

  test('Decodes letters', () => {
    expect(decodeLetter('u2')).toEqual('ú')
    expect(decodeLetter('i2')).toEqual('í')
    expect(decodeLetter('oe4')).toEqual('ǫ')
    expect(decodeLetter('a')).toEqual('a')
  })
})
