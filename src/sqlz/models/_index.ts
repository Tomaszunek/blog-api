import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'

const config = require('../config/config.json')

// Import model specification from its own definition file.
import { LanguageInstance, LanguageAttributes } from './language'
import { AppUserInstance, AppUserAttributes } from './appuser'
import { AppContentInstance, AppContentAttributes } from './content'
import { CategoryModelInstance, CategoryModelAttributes } from './category'
import { ContentCategoryModelInstance, ContentCategoryModelAttributes } from './contentCategory'
import { AppContentImageInstance, AppContentImageAttributes } from './contentImage'
import { AppContentModelInstance, AppContentModelAttributes } from './contentModels'
import { AppMainPageContentInstance, AppMainPageContentAttributes } from './mainpageContent'
import { AppProducttInstance, AppProductAttributes } from './product'
import { AppProductImageInstance, AppProductImageAttributes } from './productImage'
import { AppProductModelInstance, AppProductModelAttributes } from './productModel'

interface DbConnection {
  Language: Sequelize.Model<LanguageInstance, LanguageAttributes>,
  AppUser: Sequelize.Model<AppUserInstance, AppUserAttributes>,
  Content: Sequelize.Model<AppContentInstance, AppContentAttributes>,
  Category: Sequelize.Model<CategoryModelInstance, CategoryModelAttributes>,
  ContentCategory: Sequelize.Model<ContentCategoryModelInstance, ContentCategoryModelAttributes>,
  ContentImage: Sequelize.Model<AppContentImageInstance, AppContentImageAttributes>,
  ContentModel: Sequelize.Model<AppContentModelInstance, AppContentModelAttributes>,
  MainPageContent: Sequelize.Model<AppMainPageContentInstance, AppMainPageContentAttributes>,
  Product: Sequelize.Model<AppProducttInstance, AppProductAttributes>,
  ProductImage: Sequelize.Model<AppProductImageInstance, AppProductImageAttributes>,
  ProductModel: Sequelize.Model<AppProductModelInstance, AppProductModelAttributes>
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
