import { Request, Response } from 'express'
import { ContentDao } from '../../dao/_index'

export function getByType(req: Request, res: Response) {
  const { type } = req.params
  return ContentDao
    .findByType(type)
    .then(appusers => res.status(200).send(appusers))
    .catch(error => res.boom.badRequest(error))
}
