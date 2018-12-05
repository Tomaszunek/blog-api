import { Express } from 'express'
import { AppMainPageContentController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/mainpage-content', AppMainPageContentController.AppMainPageContentGet.list)

}
