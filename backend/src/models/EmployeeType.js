const { DataTypes } = require("sequelize");

const EmployeeType = (sequelize) =>
    sequelize.define(
        "EmployeeType", {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            descricao: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            situacao: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            paranoid: true,
        }
    );

module.exports = EmployeeType;
