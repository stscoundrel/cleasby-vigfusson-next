import { capitalize, removeHTML } from 'lib/utils/strings'

describe('String utils tests', () => {
  test('Capitalizes text', () => {
    expect(capitalize('ja nyt kun mä meen')).toBe('Ja nyt kun mä meen')
    expect(capitalize('MITÄÄN KADU EN')).toBe('Mitään kadu en')
  })

  test('Removes html', () => {
    expect(removeHTML('<strong>Strong</strong> <i>italics</i>')).toBe('Strong italics')
    expect(removeHTML('<strong>Strong</strong> <strong>Strong</strong>')).toBe('Strong Strong')
  })

  test('Returns incorrect content as-is', () => {
    expect(removeHTML(null)).toBe(null)
  })
})
