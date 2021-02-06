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

    await tree.root.findByType('div').props.onClick()

    expect(mockHandler).toHaveBeenCalled()
  })
})
