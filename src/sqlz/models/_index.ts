import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'

const config = require('../config/config.json')

// Import model specification from its own definition file.
import { LanguageInstance, LanguageAttributes } from './language'
import { AppUserInstance, AppUserAttributes } from './appuser'
import { AppContentInstance, AppContentAttributes } from './content'
import { AppCategoryInstance, AppCategoryAttributes } from './category'
import { ContentCategoryModelInstance, ContentCategoryModelAttributes } from './contentCategory'
import { AppContentImageInstance, AppContentImageAttributes } from './contentImage'
import { AppContentModelInstance, AppContentModelAttributes } from './contentModel'
import { AppMainPageContentInstance, AppMainPageContentAttributes } from './mainpageContent'
import { AppProducttInstance, AppProductAttributes } from './product'
import { AppProductImageInstance, AppProductImageAttributes } from './productImage'
import { AppProductModelInstance, AppProductModelAttributes } from './productModel'

interface DbConnection {
  Language: Sequelize.Model<LanguageInstance, LanguageAttributes>,
  AppUser: Sequelize.Model<AppUserInstance, AppUserAttributes>,
  AppContent: Sequelize.Model<AppContentInstance, AppContentAttributes>,
  AppCategory: Sequelize.Model<AppCategoryInstance, AppCategoryAttributes>,
  AppContentCategory: Sequelize.Model<ContentCategoryModelInstance, ContentCategoryModelAttributes>,
  AppContentImage: Sequelize.Model<AppContentImageInstance, AppContentImageAttributes>,
  AppContentModel: Sequelize.Model<AppContentModelInstance, AppContentModelAttributes>,
  AppMainPageContent: Sequelize.Model<AppMainPageContentInstance, AppMainPageContentAttributes>,
  AppProduct: Sequelize.Model<AppProducttInstance, AppProductAttributes>,
  AppProductImage: Sequelize.Model<AppProductImageInstance, AppProductImageAttributes>,
  AppProductModel: Sequelize.Model<AppProductModelInstance, AppProductModelAttributes>
}
let db = {}

const dbConfig = config[process.env.NODE_ENV]
const sequelize = new Sequelize(
  dbConfig['database'],
  dbConfig['username'],
  dbConfig['password'],
  dbConfig
)

const basename = path.basename(module.filename)
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function(file) {
    const model = sequelize['import'](path.join(__dirname, file))
    // NOTE: you have to change from the original property notation to
    // index notation or tsc will complain about undefined property.
    db[model['name']] = model
  })

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db['sequelize'] = sequelize
db['Sequelize'] = Sequelize

export default <DbConnection>db
