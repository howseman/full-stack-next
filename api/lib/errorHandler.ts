import { NextApiRequest, NextApiResponse } from 'next'
import { CustomError } from './CustomError'
import { HttpStatusCode } from './httpStatusCode'

export function sendErrorResponse(error: CustomError | Error, req: NextApiRequest, res: NextApiResponse) {
  sendToLogger(error)

  if (error.constructor.name === CustomError.name) { }
  
  const errorPayload = { error: parseError(error) }

  return res.status(error.statusCode || HttpStatusCode.INTERNAL_SERVER).json(errorPayload)
}

function sendToLogger(error) {
  // TODO: Set a better logging here :P
  console.error(parseError(error))
}

function catchAll() {}

function parseError(error: CustomError | Error) {
  return {
    message: error.message,
    statusCode: error.statusCode || HttpStatusCode.INTERNAL_SERVER,
    name: error.name,
    context: error.context || ''
  }
}

// export function handleError(error: CustomError | Error, req: NextApiRequest, res: NextApiResponse) {
//   if (error.constructor.name === CustomError.name) {
//     sendToLogger(error)

//     console.log(parseError(error))
//   }
  
//   const statusCode = error.statusCode || HttpStatusCode.INTERNAL_SERVER
//   const errorPayload = {
//     error: parseError(error)
//   }

//   return res.status(statusCode).json(errorPayload)
// }

// const toJSON = (error) => {
//   try {
//     const json = JSON.stringify(error)
//     return json
//   } catch (_error) {
//     // TODO: LOG the _error
//     return JSON.stringify({
//       error: {
//         message: 'Error',
//         code: 1001,
//       }
//     })
//   }
// }

