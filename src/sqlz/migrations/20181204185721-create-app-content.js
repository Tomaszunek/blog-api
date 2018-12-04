module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('AppContent', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
        unique: true
      },
      slug: {
        allowNull: false,
        type: Sequelize.STRING(100),
        unique: true
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      articleType: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      body: {
        allowNull: false,
        type: Sequelize.STRING(2500)
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }    
    })
  ,
  down: (queryInterface, Sequelize) => queryInterface.dropTable('AppContent')
}