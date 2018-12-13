import { Request, Response } from 'express'
import { ProductDao } from '../../dao/_index'

export function getBySlug(req: Request, res: Response) {
    const { slug } = req.params
    return ProductDao
        .findSingleBySlug(slug)
        .then(appusers => res.status(200).send(appusers))
        .catch(error => res.boom.badRequest(error))
}
