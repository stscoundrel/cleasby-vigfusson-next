import { act } from 'react'
import type { ReactElement, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import type { Root } from 'react-dom/client'
import { create } from 'react-test-renderer'
import type { ReactTestRenderer } from 'react-test-renderer'

const renderers: ReactTestRenderer[] = []
const roots: Root[] = []

export { act }

export const createRenderer = (element: ReactElement): ReactTestRenderer => {
  let renderer: ReactTestRenderer
  act(() => {
    renderer = create(element)
  })
  renderers.push(renderer!)
  return renderer!
}

export const renderToDOM = (element: ReactNode): Root => {
  const root = createRoot(document.createElement('div'))
  act(() => {
    root.render(element)
  })
  roots.push(root)
  return root
}

afterEach(() => {
  act(() => {
    renderers.splice(0).forEach((renderer) => renderer.unmount())
    roots.splice(0).forEach((root) => root.unmount())
  })
})
