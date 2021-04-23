import { NextApiRequest, NextApiResponse } from 'next'
import Joi from 'joi'
import { CustomError } from 'api/lib/CustomError'
import { HttpStatusCode } from 'api/lib/httpStatusCode'

const helloRouteParamsValidator = {
  async get(req: NextApiRequest): Promise<{ id: number, name: string } | Error> {
    const schema = Joi.object({
      id: Joi.number().required(),
      name: Joi.string().required(),
    })

    try {
      const queryParams = await schema.validateAsync(req.query)
      queryParams.id = Number.parseInt(queryParams.id.toString(), 10) // Could move this to a formatter function
      return queryParams
    } catch (error) {
      throw new CustomError({
        message: 'Validation error: ' + error.details[0].message,
        statusCode: HttpStatusCode.BAD_REQUEST,
        name: 'Input Validation Error',
      }, error)
    }
  }
}

export default helloRouteParamsValidator
