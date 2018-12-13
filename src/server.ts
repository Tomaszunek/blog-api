import * as express from 'express'
import * as winston from 'winston'
import * as boom from 'express-boom'
import * as morgan from 'morgan'
import * as cors from 'cors'
import * as path from 'path'
import * as expressValidator from 'express-validator'
import { json, urlencoded } from 'body-parser'
import { Express } from 'express'
import * as routes from './routes/_index'

const PORT: number = 3002
const PORT2: number = 3003

/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
export class Server {

  private app: Express
  private app2: Express

  constructor() {
    this.app = express()
    this.app2 = express()

    // const staticPath = path.join(__dirname, '/')
    // this.app.use(express.static(staticPath))

    this.app2.use(express.static(path.join(__dirname, '../dist')))
    this.app2.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../dist', 'index.html'))
    })

    // Express middleware
    this.app.use(cors({
      optionsSuccessStatus: 200
    }))
    this.app.use(urlencoded({
      extended: true
    }))
    this.app.use(json())
    this.app.use(boom())
    this.app.use(morgan('combined'))
    this.app.use(expressValidator())
    this.app.listen(PORT, () => {
      winston.log('info', '--> Server successfully started at port %d', PORT)
    })
    this.app2.listen(PORT2, () => {
      winston.log('info', '--> Server successfully started at port %d', PORT2)
    })
    routes.initRoutes(this.app)
  }

  getApp() {
    return this.app
  }
}
new Server()
