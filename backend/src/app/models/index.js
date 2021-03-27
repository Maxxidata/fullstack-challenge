import { database } from '../../database';
import Professional from './Professional';
import ProfessionalType from './ProfessionalType';

const models = {
  Professional,
  ProfessionalType,
};

models.ProfessionalType.hasMany(Professional, { foreignKey: 'professionalTypeId' });
models.Professional.belongsTo(ProfessionalType, { foreignKey: 'professionalTypeId' });

database.sync()
  .then(() => {})
  .catch(error => console.log(error));

export default models;