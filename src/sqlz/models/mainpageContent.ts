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
          AppMainPageContent.belongsTo(models.AppContent, {
            foreignKey: 'contentItemId',
            onDelete: 'CASCADE'
          })
          AppMainPageContent.belongsTo(models.AppProduct, {
            foreignKey: 'productItemId',
            onDelete: 'CASCADE'
          })
        }
      }
    })
  return AppMainPageContent
}
