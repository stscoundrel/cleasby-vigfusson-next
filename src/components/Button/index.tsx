import type { MouseEventHandler } from 'react'

interface ButtonProps {
  text: string
  action: MouseEventHandler<HTMLAnchorElement>
}

export default function Button({ text, action }: ButtonProps) {
  return (
    <a className="button" onClick={action}>
      {text}
    </a>
  )
}
