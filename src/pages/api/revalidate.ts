import { NextApiRequest, NextApiResponse } from 'next'

import { getAllWords } from 'lib/services/dictionary'
import { getWordPath } from 'lib/utils/links'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (req.query.start === undefined || req.query.end === undefined) {
    return res.status(400).json({ message: 'Start and/or end param not provided' })
  }

  if (typeof req.query.start !== 'string' || typeof req.query.end !== 'string') {
    return res.status(400).json({ message: 'Start and end expected string (number) values' })
  }

  try {
    const words = getAllWords()
    const { start, end: givenEnd } = req.query
    const end = parseInt(givenEnd, 10) <= words.length ? parseInt(givenEnd, 10) : words.length - 1
    const revalidates = words
      .sort((a, b) => a.slug.localeCompare(b.slug))
      .map((word) => getWordPath(word))
      .slice(parseInt(start, 10), end)
      .map((path) => res.revalidate(path))

    await Promise.all(revalidates)

    return res.json({ revalidated: true })
  } catch (err) {
    console.log(err)
    return res.status(500).send('Error revalidating')
  }
}
