import { NextApiRequest, NextApiResponse } from 'next';

import swaggerOptions from '@/lib/swaggerOptions';
import swaggerJSDoc from 'swagger-jsdoc';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const spec = swaggerJSDoc(swaggerOptions);
  res.status(200).json(spec);
}
