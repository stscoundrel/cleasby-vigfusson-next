import React from 'react'
import renderer from 'react-test-renderer'
import BackToTop from './index'

describe('BackToTop button', () => {
  test('Matches the snapshot', () => {
    const tree = renderer.create(<BackToTop />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Triggers scroll after click', async () => {
    const mockScroll = jest.fn()
    window.scrollTo = mockScroll

    let tree

    await renderer.act(async () => {
      tree = renderer.create(<BackToTop />)
    })

    await renderer.act(async () => {
      await tree.root.findByType('div').props.onClick()
    })

    expect(mockScroll).toHaveBeenCalled()
  })
})
