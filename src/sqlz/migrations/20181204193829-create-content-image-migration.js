module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('appcontentimages', {
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
      contentItemId: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'appcontents',
          key: 'id',
          as: 'contentItemId',
        }
      }  
    })
  ,
  down: (queryInterface, Sequelize) => queryInterface.dropTable('appcontentimages')
}