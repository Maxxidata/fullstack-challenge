'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('professionals', 'type_of_professional',{
      type: Sequelize.UUID,
      allowNull: true,
      references: { model: 'type_of_professionals', key: 'id' },
      onUpdate: 'SET NULL',
      onDelete: 'SET NULL'
    })
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('professionals', 'type_of_professional');
    
  }
};
