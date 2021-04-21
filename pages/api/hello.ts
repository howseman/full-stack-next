import { NextApiRequest, NextApiResponse } from 'next'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import errorHandler from '../../api/lib/errorHandler'
import helloService from '../../api/services/hello.service'

/**
 * This function basically acts as a route handler (so far...)
 */
export default async function(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      // Prepare the arguments to be passed to services
      const {
        query: { id, name },
      } = req

      try {
        const result = await helloService.sayHi({
          id: Number.parseInt(id.toString(), 10),
          name: name.toString(),
        })
        return res.status(200).json(result)
      } catch (error) {
        return errorHandler.handleError(error, req, res)
      }
    case 'PUT':
      // Update or create data in your database
      return res.status(200).json({ id, name: name || `User ${id}` })
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
