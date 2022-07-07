module.exports = (sequelize, DataTypes) => {
  const Professional = sequelize.define(
    "Professional",
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      professionalTypeId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      freezeTableName: true,
    }
  );

  Professional.associate = (models) => {
    Professional.belongsTo(models.ProfessionalType, {
      foreignKey: "professionalTypeId",
      as: 'professionalType'
    });
  };

  return Professional;
};
