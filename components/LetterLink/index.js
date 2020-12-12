import Link from 'next/link'

export default function LetterLink({ letter }) {
  return (
   <Link href={`/letter/${letter}`}>
      <a>{letter}</a>
    </Link>
  )
}
