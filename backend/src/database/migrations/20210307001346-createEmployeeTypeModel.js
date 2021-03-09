"use strict";

module.exports = {
    up: async(queryInterface, Sequelize) => {
        queryInterface.createTable("EmployeeTypes", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            descricao: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            situacao: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW(),
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW(),
            },
            deletedAt: Sequelize.DATE,
        });
    },

    down: async(queryInterface, Sequelize) => {
        queryInterface.dropTable("EmployeeTypes");
    },
};
