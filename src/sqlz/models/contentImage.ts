import * as Sequelize from 'sequelize'

export interface AppContentImageAttributes {
  id?: number
  idContentItem: number,
  image: string,
  order: number
}

export interface AppContentImageInstance extends Sequelize.Instance<AppContentImageAttributes> {
  id: number
  idContentItem: number,
  createdAt: Date
  updatedAt: Date

  image: string,
  order: number
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  const AppContentImage = sequelize.define('AppContentImage', {
    image: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
      classMethods: {
        associate: function(models) {
          AppContentImage.belongsTo(models.ContentImage, {
            foreignKey: 'contentItemId',
            as: 'appContentImage'
          })
        }
      }
    })
  return AppContentImage
}
