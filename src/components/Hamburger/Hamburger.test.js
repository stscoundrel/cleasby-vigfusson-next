import React from 'react'
import renderer from 'react-test-renderer'
import Hamburger from './index'

describe('Hamburger button', () => {
  test('Matches the snapshot', () => {
    const mockHandler = jest.fn()
    const tree = renderer.create(
      <Hamburger action={mockHandler} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Triggers callback after click', async () => {
    const mockHandler = jest.fn()

    const tree = renderer.create(
      <Hamburger action={mockHandler} />,
    )

    // Hamburger is closed at start.
    const closedState = tree.toJSON()

    // Click hamburger.
    await renderer.act(async () => {
      await tree.root.findByType('div').props.onClick()

      // Assert hamburger has open stat & callback was called.
      const openState = tree.toJSON()
      expect(closedState).not.toEqual(openState)
      expect(mockHandler).toHaveBeenCalled()
    })
  })
})
