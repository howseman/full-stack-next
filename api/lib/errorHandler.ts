import { NextApiRequest, NextApiResponse } from 'next'

const errorHandler = {
  handleError(error: Error, req: NextApiRequest, res: NextApiResponse) {
    // TODO: Use a better logger :P
    console.log(error)

    const statusCode = error.status || 500
    const errorPayload = {
      error: {
        message: `${error.message}`,
        status: statusCode,
      },
    }

    return res.status(statusCode).json(errorPayload)
  }
}

export default errorHandler
