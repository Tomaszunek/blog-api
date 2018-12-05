import { Request, Response } from 'express'
import { ProductDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return ProductDao
    .findAll()
    .then(appusers => res.status(200).send(appusers))
    .catch(error => res.boom.badRequest(error))
}
