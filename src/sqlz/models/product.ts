import * as Sequelize from 'sequelize'

export interface AppProductAttributes {
  id?: string
  productType: ProductType,
  name: string,
  slug: string
  image: string,
  body: string
}

export interface AppProducttInstance extends Sequelize.Instance<AppProductAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  productType: ProductType,
  name: string,
  slug: string
  image: string,
  body: string
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  const AppProduct = sequelize.define('AppProduct', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    productType: DataTypes.STRING,
    image: DataTypes.STRING,
    body: DataTypes.STRING,
  }, {
      classMethods: {
        associate: function(models) { }
      }
    })
  return AppProduct
}


export enum ProductType {
  'news', 'technology', 'motivation', 'psychology'
}
