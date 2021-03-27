import { DataTypes } from 'sequelize';
import { database } from '../../database';

const ProfessionalType = database.define('ProfessionalType', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  situation: {
    type: DataTypes.BOOLEAN,  
    allowNull: false,
  }
}, {
  tableName: 'professional_type',
});

export default ProfessionalType;