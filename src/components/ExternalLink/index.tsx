interface ExternalLinkProps{
  href: string,
  title: string,
}

export default function ExternalLink({ href, title }: ExternalLinkProps) {
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
