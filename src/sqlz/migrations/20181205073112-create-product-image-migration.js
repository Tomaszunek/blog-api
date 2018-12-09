module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('appproductimages', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING(100),
        unique: true
      },
      order: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true
      },          
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      productItemId: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'appproducts',
          key: 'id',
          as: 'productItemId',
        }
      }  
    })
  ,
  down: (queryInterface, Sequelize) => queryInterface.dropTable('ProductImages')
}