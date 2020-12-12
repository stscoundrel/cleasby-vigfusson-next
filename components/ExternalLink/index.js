export default function ExternalLink({ href, title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  )
}
