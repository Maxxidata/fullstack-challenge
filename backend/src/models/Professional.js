const { Model, DataTypes } = require('sequelize');

class Professional extends Model{
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            situation: DataTypes.BOOLEAN
        },{
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsTo(models.TypeOfProfessional, { foreignKey: 'type_of_professional', as:'type' });
    }
}

module.exports = Professional