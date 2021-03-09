"use strict";

module.exports = {
    up: async(queryInterface, Sequelize) => {
        queryInterface.createTable("Employees", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            telefone: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            tipoDeProfissional: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: {
                        tableName: "EmployeeTypes",
                    },
                    onDelete: "RESTRICT",
                    onUpdate: "RESTRICT",
                },
            },
            situacao: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
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
        queryInterface.dropTable("Employees");
    },
};
