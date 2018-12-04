import * as Sequelize from 'sequelize'

export interface CategoryModelAttributes {
  id?: number
  name: string,
  type: CategoryTypes
}

export interface CategoryModelInstance extends Sequelize.Instance<CategoryModelAttributes> {
  id: number
  createdAt: Date
  updatedAt: Date

  name: string,
  type: CategoryTypes
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  const CategoryModel = sequelize.define('CategoryModel', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
      classMethods: {
      }
    })
  return CategoryModel
}

export enum CategoryTypes {
  'motivation'
}
