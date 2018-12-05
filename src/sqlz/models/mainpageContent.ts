import * as Sequelize from 'sequelize'

export interface AppMainPageContentAttributes {
  id?: number
  contentItemId: number,
  productItemId: number,
  idSlider: boolean,
  order: number
}

export interface AppMainPageContentInstance extends Sequelize.Instance<AppMainPageContentAttributes> {
  id: number
  contentItemId: number,
  productItemId: number,
  createdAt: Date
  updatedAt: Date

  isSlider: boolean,
  order: number
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  const AppMainPageContent = sequelize.define('AppMainPageContent', {
    isSlider: DataTypes.BOOLEAN,
    order: DataTypes.INTEGER
  }, {
      classMethods: {
        associate: function(models) {
          AppMainPageContent.hasMany(models.AppContent, {
            foreignKey: 'contentItemId',
            as: 'appMainPageContents'
          })
          AppMainPageContent.hasMany(models.AppProduct, {
            foreignKey: 'productItemId',
            as: 'appMainPageProducts'
          })
        }
      }
    })
  return AppMainPageContent
}
