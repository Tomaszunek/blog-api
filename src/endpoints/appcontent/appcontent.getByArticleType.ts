import { Request, Response } from 'express'
import { ContentDao } from '../../dao/_index'

export function getByArticleType(req: Request, res: Response) {
  const { articleType } = req.params
  return ContentDao
    .findByArticleType(articleType)
    .then(content => res.status(200).send(content))
    .catch(error => res.boom.badRequest(error))
}
