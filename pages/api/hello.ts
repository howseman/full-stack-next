import { NextApiRequest, NextApiResponse } from 'next'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendErrorResponse } from 'api/lib/errorHandler'
import helloRouteParamsValidator from 'api/route-validators/hello.validator'
import helloService from 'api/services/hello.service'

/**
 * This function basically acts as a route handler (so far...)
 */
export default async function(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        // Prepare the arguments to be passed to services
        const { id, name } = await helloRouteParamsValidator.get(req)

        const result = await helloService.sayHi({ id, name })
        return res.status(200).json(result)
      } catch (error) {
        return sendErrorResponse(error, req, res)
      }
    case 'PUT':
      // Update or create data in your database
      return res.status(200).json({ id, name: name || `User ${id}` })
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
