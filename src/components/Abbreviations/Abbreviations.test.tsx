import { createRenderer } from '../../../tests/helpers/react'
import React from 'react'
import Abbreviations from './index'

describe('Abbreviations component', () => {
  const abbreviations = {
    common: [
      {
        abbreviation: 'f.',
        explanation: 'feminine.',
      },
      {
        abbreviation: 'n.',
        explanation: 'neuter.',
      },
    ],
    works: [
      {
        abbreviation: 'Björn',
        explanation: 'Biörn Halldórsson.',
      },
    ],
  }

  test('Matches the snapshot', () => {
    const tree = createRenderer(
      <Abbreviations abbreviations={abbreviations} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Does not print empty abbreviation blocks', () => {
    const tree = createRenderer(
      <Abbreviations abbreviations={{ ...abbreviations, works: [] }} />,
    )

    expect(JSON.stringify(tree)).toContain('Abbreviations used:')
    expect(JSON.stringify(tree)).not.toContain('Works & Authors cited:')
  })
})
