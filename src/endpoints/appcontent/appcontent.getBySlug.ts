import { Request, Response } from 'express'
import { ContentDao } from '../../dao/_index'

export function getBySlug(req: Request, res: Response) {
  const { slug } = req.params
  return ContentDao
    .findSingleBySlug(slug)
    .then(content => res.status(200).send(content))
    .catch(error => res.boom.badRequest(error))
}
