export default function Button({ text, action }) {
  return (
    <a className="button" onClick={action}>{text}</a>
  )
}
