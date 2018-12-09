import { Express } from 'express'
import { AppContentController, } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/contents', AppContentController.AppContentGet.list)
  app.get('/api/contents/:type', AppContentController.AppContentgetByType.getByType)

}
