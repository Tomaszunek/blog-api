import * as Sequelize from 'sequelize'

export interface AppCategoryAttributes {
  id?: number
  name: string,
  type: CategoryTypes
}

export interface AppCategoryInstance extends Sequelize.Instance<AppCategoryAttributes> {
  id: number
  createdAt: Date
  updatedAt: Date

  name: string,
  type: CategoryTypes
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  const AppCategory = sequelize.define('AppCategory', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
      classMethods: {
        associate: function(models) {
          AppCategory.hasMany(models.AppContentCategory, {
            foreignKey: 'categoryId'
          })
        }
      }
    })
  return AppCategory
}

export enum CategoryTypes {
  'motivation'
}
