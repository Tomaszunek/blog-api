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
          AppContentCategory.belongsTo(models.AppContent, {
            foreignKey: 'contentItemId',
            onDelete: 'CASCADE',
          })
          AppContentCategory.belongsTo(models.AppProduct, {
            foreignKey: 'productItemId',
            onDelete: 'CASCADE',
          })
          AppContentCategory.belongsTo(models.AppCategory, {
            foreignKey: 'categoryId',
            onDelete: 'CASCADE',
          })
        }
      }
    })
  return AppContentCategory
}
