import { createRenderer, act } from '../../../tests/helpers/react'
import React from 'react'
import Hamburger from './index'

describe('Hamburger button', () => {
  test('Matches the snapshot', () => {
    const mockHandler = jest.fn()
    const tree = createRenderer(<Hamburger action={mockHandler} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Triggers callback after click', async () => {
    const mockHandler = jest.fn()

    const tree = createRenderer(<Hamburger action={mockHandler} />)

    // Hamburger is closed at start.
    const closedState = tree.toJSON()

    // Click hamburger.
    await act(async () => {
      await tree.root.findByType('div').props.onClick()
    })

    // Assert after React has committed the state update.
    const openState = tree.toJSON()
    expect(closedState).not.toEqual(openState)
    expect(mockHandler).toHaveBeenCalled()
  })
})
