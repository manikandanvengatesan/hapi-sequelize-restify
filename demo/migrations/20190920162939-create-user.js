module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        username: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
        firstName: {
            type: Sequelize.STRING,
        },
        lastName: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Users'),
};
