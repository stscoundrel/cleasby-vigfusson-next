import WordLink from 'components/WordLink'
import { DictionaryEntry } from 'lib/services/dictionary'
import { capitalize } from 'lib/utils/strings';

interface SimilarEntriesProps {
  entries: DictionaryEntry[]
}

const postfixMap = new Map()
postfixMap.set('1', 'I')
postfixMap.set('2', 'II')
postfixMap.set('3', 'III')
postfixMap.set('4', 'IV')
postfixMap.set('5', 'V')
postfixMap.set('6', 'VI')
postfixMap.set('7', 'VII')
postfixMap.set('8', 'VIII')
postfixMap.set('9', 'IX')
postfixMap.set('10', 'X')

export default function SimilarEntries({ entries }: SimilarEntriesProps) {
  const parsePostfix = (entryToParse: DictionaryEntry): string => {
    let postfix = 'I';
    const lastChar = entryToParse.slug.slice(-1)

    if (postfixMap.has(lastChar)) {
      postfix = postfixMap.get(lastChar)
    }

    return `${capitalize(entryToParse.word)} (${postfix})`
  }

  if (entries.length === 0) {
    return null
  }

  return (
    <>
      <h4>Similar entries:</h4>
      <ul>
        {entries.map((entry, index) => (
          <li key={`similar-link-${index}`}>
            <WordLink data={{ ...entry, word: parsePostfix(entry) }} useLowerCase={false} />
          </li>
        ))}
      </ul>
    </>
  )
}
