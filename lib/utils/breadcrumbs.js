import { slugifyLetter, slugifyWord } from 'lib/utils/slugs'
import { capitalize } from 'lib/utils/strings'

const getFrontpage = () => ({
  label: 'Cleasby & Vigfusson Dictionary',
  url: '/',
})

const getLetter = (letter) => ({
  label: `Letter ${letter.toUpperCase()}`,
  url: `/letter/${slugifyLetter(letter)}`,
})

const getWord = (word) => ({
  label: capitalize(word),
  url: `/word/${slugifyWord(word)}`,
})

export const getBreadcrumbs = (data) => {
  const { type, word, letter } = data

  const breadcrumbs = [getFrontpage()]

  if (type === 'letter' || type === 'word') {
    breadcrumbs.push(getLetter(letter))
  }

  if (type === 'word') {
    breadcrumbs.push(getWord(word))
  }

  return breadcrumbs
}

export default {
  getBreadcrumbs,
}
