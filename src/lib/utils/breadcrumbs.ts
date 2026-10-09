import { slugifyLetter, slugifyWord } from 'lib/utils/slugs'
import { capitalize } from 'lib/utils/strings'

export interface Breadcrumb {
  label: string
  url: string
}

type BreadcrumbData =
  | { type: 'page'; word: null; letter: null }
  | { type: 'letter'; word: null; letter: string }
  | { type: 'word'; word: string; letter: string }

const getFrontpage = (): Breadcrumb => ({
  label: 'Cleasby & Vigfusson Dictionary',
  url: '/',
})

const getLetter = (letter: string): Breadcrumb => ({
  label: `Letter ${letter.toUpperCase()}`,
  url: `/letter/${slugifyLetter(letter)}`,
})

const getWord = (word: string): Breadcrumb => ({
  label: capitalize(word),
  url: `/word/${slugifyWord(word)}`,
})

export const getBreadcrumbs = (data: BreadcrumbData): Breadcrumb[] => {
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
