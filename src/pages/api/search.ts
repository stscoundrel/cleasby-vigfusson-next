import { getAllWords } from 'lib/services/dictionary'
import { Criteria, searchDictionary } from 'lib/services/search';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.search || !req.query.criteria) {
    return res.status(422).json({ message: 'Missing search term or criteria' })
  }

  const { search, criteria } = req.query
  const formattedCriteria = Array.isArray(criteria) ? criteria as Criteria[] : criteria.split(',') as Criteria[]

  const dictionary = getAllWords();
  const results = searchDictionary(String(search), dictionary, formattedCriteria)

  if (results.length > 150) {
    return res.status(200).json(results.slice(0, 150))
  }

  return res.status(200).json(results)
}
