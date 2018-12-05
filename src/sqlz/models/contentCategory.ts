import * as Sequelize from 'sequelize'

export interface ContentCategoryModelAttributes {
  id?: number
  contentItemId: number,
  categoryId: number,
  isVisible: boolean
}

export interface ContentCategoryModelInstance extends Sequelize.Instance<ContentCategoryModelAttributes> {
  id: number
  contentItemId: number,
  categoryId: number,
  createdAt: Date
  updatedAt: Date

  isVisible: boolean
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  const ContentCategoryModel = sequelize.define('ContentCategoryModel', {
    isVisible: DataTypes.BOOLEAN,
  }, {
      classMethods: {
        associate: function(models) {
          ContentCategoryModel.hasMany(models.CategoryModel, {
            foreignKey: 'categoryId',
            as: 'appCategories'
          })
          ContentCategoryModel.belongsTo(models.AppContent, {
            foreignKey: 'contentItemId',
            as: 'contentCategories'
          })
          ContentCategoryModel.belongsTo(models.AppProduct, {
            foreignKey: 'productItemId',
            as: 'productCategories'
          })
        }
      }
    })
  return ContentCategoryModel
}
