import { NextApiRequest, NextApiResponse } from 'next'

import { getRobots } from 'lib/utils/robots'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain');
  res.write(getRobots());
  res.end();
}
