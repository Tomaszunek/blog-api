import * as Sequelize from 'sequelize'

export interface AppProductImageAttributes {
  id?: number
  productItemId: number,
  image: string,
  order: number
}

export interface AppProductImageInstance extends Sequelize.Instance<AppProductImageAttributes> {
  id: number
  productItemId: number,
  createdAt: Date
  updatedAt: Date

  image: string,
  order: number
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  const AppProductImage = sequelize.define('AppProductImage', {
    image: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
      classMethods: {
        associate: function(models) {
          AppProductImage.belongsTo(models.AppProduct, {
            foreignKey: 'productItemId',
            as: 'appProductImage'
          })
        }
      }
    })
  return AppProductImage
}
