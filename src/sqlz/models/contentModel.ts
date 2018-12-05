import * as Sequelize from 'sequelize'

export interface AppContentModelAttributes {
  id?: number
  contentItemId: number,
  model: string,
  order: number
}

export interface AppContentModelInstance extends Sequelize.Instance<AppContentModelAttributes> {
  id: number
  contentItemId: number,
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
          AppContentModel.belongsTo(models.AppContent, {
            foreignKey: 'contentItemId',
            onDelete: 'CASCADE',
          })
        }
      }
    })
  return AppContentModel
}
