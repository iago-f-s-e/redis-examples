import { servicesFactory } from '../factories'
import { NextFunction, Request, Response } from 'express'

export function startFactories (request: Request, _: Response, next: NextFunction): void {
  request.services = servicesFactory()

  next()
}
