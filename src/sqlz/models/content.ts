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
        associate: function(models) { }
      }
    })
  return AppContent
}

export enum ContentType {
  'article', 'product', 'project', 'ability'
}

export enum ArticleType {
  'news', 'technology', 'motivation', 'psychology'
}
