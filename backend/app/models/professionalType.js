module.exports = (sequelize, DataTypes) => {
  const ProfessionalType = sequelize.define(
    "ProfessionalType",
    {
      description: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      freezeTableName: true,
    }
  );
  return ProfessionalType;
};
