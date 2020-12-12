// Components.
import LetterLink from 'components/LetterLink'

export default function Navigation({ letters }) {
  return (
    <nav>
      <ul>
        {letters.map((letter) => (
          <li key={letter}>
            <LetterLink letter={letter} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
