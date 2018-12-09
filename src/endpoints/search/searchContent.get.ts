import { Request, Response } from 'express'
import { SearchContentDao } from '../../dao/_index'

export function searchContent(req: Request, res: Response) {
  return SearchContentDao
    .searchContent({
      findType: ['articles', 'products'],
      type: 'spiritual',
      articleType: 'article2',
      categoryNames: [
        {
          name: 'category2'
        },
        {
          name: 'category1'
        },
        {
          name: 'category4'
        }
      ]
    })
    .then(content => res.status(200).send(content))
    .catch(error => res.boom.badRequest(error))
}
