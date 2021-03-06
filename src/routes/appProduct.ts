import { Express } from 'express'
import { AppProductController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/products', AppProductController.AppProductGet.list)
  app.get('/api/productbyslug/:slug', AppProductController.AppProductGetBySlug.getBySlug)
}
