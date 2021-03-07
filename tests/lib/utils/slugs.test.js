import { slugifyLetter, decodeLetter, slugifyWord } from 'lib/utils/slugs'

describe('Slug utils', () => {
  test('Slugifys letters', () => {
    expect(slugifyLetter('ý')).toEqual('y2')
    expect(slugifyLetter('é')).toEqual('e2')
    expect(slugifyLetter('ú')).toEqual('u2')
    expect(slugifyLetter('í')).toEqual('i2')
    expect(slugifyLetter('á')).toEqual('a2')
    expect(slugifyLetter('a')).toEqual('a')
    expect(slugifyLetter('þ')).toEqual('th')
    expect(slugifyLetter('æ')).toEqual('ae')
    expect(slugifyLetter('ó')).toEqual('o2')
    expect(slugifyLetter('ö')).toEqual('oe')
    expect(slugifyLetter('ø')).toEqual('oe2')
    expect(slugifyLetter('œ')).toEqual('oe3')
    expect(slugifyLetter('ǫ')).toEqual('oe4')
  })

  test('Slugifys words', () => {
    expect(slugifyWord('äimänkäki')).toEqual('aimankaki')
  })

  test('Decodes letters', () => {
    expect(decodeLetter('y2')).toEqual('ý')
    expect(decodeLetter('e2')).toEqual('é')
    expect(decodeLetter('u2')).toEqual('ú')
    expect(decodeLetter('i2')).toEqual('í')
    expect(decodeLetter('a2')).toEqual('á')
    expect(decodeLetter('a')).toEqual('a')
    expect(decodeLetter('th')).toEqual('þ')
    expect(decodeLetter('ae')).toEqual('æ')
    expect(decodeLetter('o2')).toEqual('ó')
    expect(decodeLetter('oe')).toEqual('ö')
    expect(decodeLetter('oe2')).toEqual('ø')
    expect(decodeLetter('oe3')).toEqual('œ')
    expect(decodeLetter('oe4')).toEqual('ǫ')
  })
})
