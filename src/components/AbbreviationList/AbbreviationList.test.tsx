import React from 'react'
import renderer from 'react-test-renderer'
import AbbreviationList from './index'
import styles from './AbbreviationList.module.scss'

describe('AbbreviationList component', () => {
  const abbreviations = [
    {
      abbreviation: 'f.',
      explanation: 'feminine.',
    },
    {
      abbreviation: 'n.',
      explanation: 'neuter.',
    },
  ]

  test('Matches the snapshot', () => {
    const tree = renderer.create(
      <AbbreviationList abbreviations={abbreviations} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct amount of abbreviations', () => {
    const tree = renderer.create(<AbbreviationList abbreviations={abbreviations} />)
    const { root } = tree

    expect(root.findAllByProps({ className: styles.abbreviation }).length).toEqual(2)
  })

  test('Has expected abbreviation content', () => {
    const tree = renderer.create(<AbbreviationList abbreviations={abbreviations} />)

    expect(JSON.stringify(tree)).toContain('f.')
    expect(JSON.stringify(tree)).toContain('feminine.')
    expect(JSON.stringify(tree)).toContain('n.')
    expect(JSON.stringify(tree)).toContain('neuter.')
  })
})
