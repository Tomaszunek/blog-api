module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('appmainpagecontents', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      isSlider: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
      contentItemId: {
        type: Sequelize.UUID,
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'appcontents',
          key: 'id',
          as: 'contentItemId',
        }
      },
      productItemId: {
        type: Sequelize.UUID,
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'appproducts',
          key: 'id',
          as: 'productItemId',
        }
      }
    })
  ,
  down: (queryInterface, Sequelize) => queryInterface.dropTable('AppMainPageContent')
}