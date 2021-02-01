import React from 'react'
import renderer from 'react-test-renderer'
import Button from './index'

describe('Button component', () => {
  test('Matches the snapshot', () => {
    const mockHandler = jest.fn()
    const tree = renderer.create(
      <Button text="Button text" action={mockHandler} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct button text', () => {
    const mockHandler = jest.fn()
    const tree = renderer.create(<Button text="ButtonText" action={mockHandler} />)
    const { root } = tree

    expect(root.findByType('a').children).toEqual(['ButtonText'])
  })

  test('Triggers callback after click', async () => {
    const mockHandler = jest.fn()

    const tree = renderer.create(
        <Button text="Button text" action={mockHandler} />,
    )

    await tree.root.findByType('a').props.onClick()

    expect(mockHandler).toHaveBeenCalled()
  })
})
