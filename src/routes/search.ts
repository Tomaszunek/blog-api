import { Express } from 'express'
import { SearchContentController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/search', SearchContentController.SearchContentGet.searchContent)

}
