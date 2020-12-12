import Link from 'next/link'

export default function WordLink({ data }) {
  const { slug, word } = data

  return (
   <Link key={`link${slug}`} href={`/word/${slug}`}>
      <a key={`a-${slug}`}>{word}</a>
    </Link>
  )
}
