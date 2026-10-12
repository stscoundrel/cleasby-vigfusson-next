import { createRenderer, act } from '../../../tests/helpers/react'
import React from 'react'
import BackToTop from './index'

describe('BackToTop button', () => {
  test('Matches the snapshot', () => {
    const tree = createRenderer(<BackToTop />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Triggers scroll after click', async () => {
    const mockScroll = jest.fn()
    window.scrollTo = mockScroll

    let tree

    await act(async () => {
      tree = createRenderer(<BackToTop />)
    })

    await act(async () => {
      await tree.root.findByType('div').props.onClick()
    })

    expect(mockScroll).toHaveBeenCalled()
  })
})
