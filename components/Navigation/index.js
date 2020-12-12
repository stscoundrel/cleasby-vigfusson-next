// Components.
import LetterLink from 'components/LetterLink'

export default function Navigation({ letters }) {
  return (
    <nav>
      <ul>
        {letters.map((entry) => (
          <li key={entry.slug}>
            <LetterLink letter={entry} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
