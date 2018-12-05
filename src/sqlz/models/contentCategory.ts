import * as Sequelize from 'sequelize'

export interface ContentCategoryModelAttributes {
  id?: number
  contentItemId: number,
  productItemId: number,
  categoryId: number,
  isVisible: boolean
}

export interface ContentCategoryModelInstance extends Sequelize.Instance<ContentCategoryModelAttributes> {
  id: number
  contentItemId: number,
  productItemId: number,
  categoryId: number,
  createdAt: Date
  updatedAt: Date

  isVisible: boolean
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  const AppContentCategory = sequelize.define('AppContentCategory', {
    isVisible: DataTypes.BOOLEAN,
  }, {
      classMethods: {
        associate: function(models) {
          AppContentCategory.hasMany(models.CategoryModel, {
            foreignKey: 'categoryId',
            as: 'appCategories'
          })
          AppContentCategory.belongsTo(models.AppContent, {
            foreignKey: 'contentItemId',
            as: 'contentCategories'
          })
          AppContentCategory.belongsTo(models.AppProduct, {
            foreignKey: 'productItemId',
            as: 'productCategories'
          })
        }
      }
    })
  return AppContentCategory
}
