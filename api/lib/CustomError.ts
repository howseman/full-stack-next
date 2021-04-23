import { HttpStatusCode } from './httpStatusCode'

export interface ICustomError {
  message: string;
  name?: string;
  statusCode?: HttpStatusCode;
  context?: string;
}

export class CustomError implements ICustomError {
  public readonly message: string
  public readonly statusCode: HttpStatusCode
  public readonly name: string
  public readonly context: string
  public readonly _error: Error

  constructor(errorDetails: ICustomError, error: Error = null) {
    this.message = errorDetails.message
    this.statusCode = errorDetails.statusCode || HttpStatusCode.INTERNAL_SERVER
    this.name = errorDetails.name
    this.context = errorDetails.context || ''
    this._error = error
  }
}
