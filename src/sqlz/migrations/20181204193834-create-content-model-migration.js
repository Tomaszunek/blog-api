module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('ContentModels', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      model: {
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
      contentItemId: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'AppContent',
          key: 'id',
          as: 'contentItemId',
        }
      }       
    })
  ,
  down: (queryInterface, Sequelize) => queryInterface.dropTable('ContentModels')
}