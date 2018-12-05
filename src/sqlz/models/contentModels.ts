import * as Sequelize from 'sequelize'

export interface AppContentModelAttributes {
  id?: number
  idContentItem: number,
  model: string,
  order: number
}

export interface AppContentModelInstance extends Sequelize.Instance<AppContentModelAttributes> {
  id: number
  idContentItem: number,
  createdAt: Date
  updatedAt: Date

  model: string,
  order: number
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  const AppContentModel = sequelize.define('AppContentModel', {
    model: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
      classMethods: {
        associate: function(models) {
          AppContentModel.belongsTo(models.ContentImage, {
            foreignKey: 'contentItemId',
            as: 'appContentModel'
          })
        }
      }
    })
  return AppContentModel
}
