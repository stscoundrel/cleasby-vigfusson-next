import Link from 'next/link'

export default function LetterLink({ letter }) {
  return (
   <Link href={`/letter/${letter.slug}`}>
      <a>{letter.letter}</a>
    </Link>
  )
}
