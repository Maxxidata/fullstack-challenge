import { DataTypes } from 'sequelize';
import { database } from '../../database';

const Professional = database.define('Professional', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  professionalTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  situation: {
    type: DataTypes.BOOLEAN,  
    allowNull: false,
  }
}, {
  tableName: 'professional'
});

export default Professional;