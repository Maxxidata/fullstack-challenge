const { DataTypes } = require("sequelize");

const Employee = (sequelize) => {
    const EmployeeType = require("./EmployeeType")(sequelize);

    const EmployeeModel = sequelize.define(
        "Employee", {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            telefone: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
            },
            tipoDeProfissional: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            situacao: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        }, {
            paranoid: true,
        }
    );
    EmployeeModel.belongsTo(EmployeeType, {
        foreignKey: "tipoDeProfissional",
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    });
    return EmployeeModel;
};

module.exports = Employee;
