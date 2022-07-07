const { Model, DataTypes } = require('sequelize');

class TypeOfProfessional extends Model{
    static init(connection) {
        super.init({
            description: DataTypes.STRING,
        },{
            sequelize: connection
        })
    }
    static associate(models) {
        this.hasMany(models.Professional, { foreignKey: 'type_of_professional', as:'type' })
    }
}

module.exports = TypeOfProfessional