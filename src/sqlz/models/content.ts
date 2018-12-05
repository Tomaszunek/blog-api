import * as Sequelize from 'sequelize'

export interface AppContentAttributes {
  id?: string
  type: ContentType,
  articleType: ArticleType,
  name: string,
  slug: string
  image: string,
  body: string
}

export interface AppContentInstance extends Sequelize.Instance<AppContentAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  type: ContentType,
  articleType: ArticleType,
  name: string,
  slug: string
  image: string,
  body: string
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  const AppContent = sequelize.define('AppContent', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    articleType: DataTypes.STRING,
    image: DataTypes.STRING,
    body: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
      classMethods: {
        associate: function(models) {
          AppContent.hasMany(models.AppContentImage, {
            foreignKey: 'contentItemId',
            as: 'appContentImage'
          })
          AppContent.hasMany(models.AppContentModel, {
            foreignKey: 'contentItemId',
            as: 'appContentModels'
          })
          AppContent.belongsTo(models.AppContentCategory, {
            foreignKey: 'contentItemId',
            as: 'appContentCategories'
          })
          AppContent.belongsTo(models.AppMainPageContent, {
            foreignKey: 'contentItemId',
            as: 'appMainPageContent'
          })
        }
      }
    })
  return AppContent
}

export enum ContentType {
  'article', 'project', 'ability'
}

export enum ArticleType {
  'news', 'technology', 'motivation', 'psychology'
}
