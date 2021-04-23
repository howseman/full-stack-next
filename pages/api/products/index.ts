import { NextApiRequest, NextApiResponse } from 'next'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendErrorResponse } from 'api/lib/errorHandler'
import productsService from 'api/services/products.service'

/**
 * This function basically acts as a route handler (so far...)
 */
export default async function(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const result = await productsService.getAllInStock()
        return res.status(200).json(result)
      } catch (error) {
        return sendErrorResponse(error, req, res)
      }
    default:
      res.setHeader('Allow', ['GET'])
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
