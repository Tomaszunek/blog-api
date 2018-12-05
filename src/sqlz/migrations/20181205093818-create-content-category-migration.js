module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('AppContentCategories', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      isVisible: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
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
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'AppContent',
          key: 'id',
          as: 'contentItemId',
        }
      },
      productItemId: {
        type: Sequelize.UUID,
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'AppProduct',
          key: 'id',
          as: 'productItemId',
        }
      },
      categoryId: {
        type: Sequelize.UUID,
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'AppCategories',
          key: 'id',
          as: 'categoryId',
        }
      }        
    })
  ,
  down: (queryInterface, Sequelize) => queryInterface.dropTable('AppContentCategories')
}