const slugify = require('slugify')

const slugTable = [
  {
    letter: 'á',
    slug: 'a2',
  },
  {
    letter: 'ó',
    slug: 'o2',
  },
  {
    letter: 'ö',
    slug: 'oe',
  },
  {
    letter: 'ø',
    slug: 'oe2',
  },
  {
    letter: 'œ',
    slug: 'oe3',
  },
  {
    letter: 'ǫ',
    slug: 'oe4',
  },
  {
    letter: 'ý',
    slug: 'y2',
  },
  {
    letter: 'ú',
    slug: 'u2',
  },
  {
    letter: 'í',
    slug: 'i2',
  },
  {
    letter: 'é',
    slug: 'e2',
  },
  {
    letter: 'þ',
    slug: 'th',
  },
  {
    letter: 'æ',
    slug: 'ae',
  },
]

const slugifyLetter = (letter) => {
  let slug = null

  slugTable.forEach((entry) => {
    if (entry.letter === letter) {
      slug = entry.slug
    }
  })

  if (!slug) {
    slug = slugify(letter)
  }

  return slug
}

const slugifyWord = (word) => slugify(word)

const decodeLetter = (slug) => {
  let letter = null

  slugTable.forEach((entry) => {
    if (entry.slug === slug) {
      letter = entry.letter
    }
  })

  if (!letter) {
    letter = slug
  }

  return letter
}

module.exports = {
  slugifyLetter,
  slugifyWord,
  decodeLetter,
}
