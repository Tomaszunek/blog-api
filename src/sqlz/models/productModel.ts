import * as Sequelize from 'sequelize'

export interface AppProductModelAttributes {
  id?: number
  productItemId: number,
  model: string,
  order: number
}

export interface AppProductModelInstance extends Sequelize.Instance<AppProductModelAttributes> {
  id: number
  productItemId: number,
  createdAt: Date
  updatedAt: Date

  model: string,
  order: number
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  const AppProductModel = sequelize.define('AppProductModel', {
    model: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
      classMethods: {
        associate: function(models) {
          AppProductModel.belongsTo(models.AppProduct, {
            foreignKey: 'productItemId',
            as: 'appProductModel'
          })
        }
      }
    })
  return AppProductModel
}
