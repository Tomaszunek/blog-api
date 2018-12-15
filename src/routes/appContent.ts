import { Express } from 'express'
import { AppContentController } from '../endpoints/_index'

export function routes(app: Express) {
  app.get('/api/contents', AppContentController.AppContentGet.list)
  app.get('/api/contents/:type', AppContentController.AppContentgetByType.getByType)
  app.get('/api/contents-article/:articleType', AppContentController.AppContentgetByArticleType.getByArticleType)
  app.get('/api/contentbyslug/:slug', AppContentController.AppContentgetBySlug.getBySlug)
}
