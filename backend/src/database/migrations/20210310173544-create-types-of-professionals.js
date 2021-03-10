'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(()=>{
      return queryInterface.createTable('type_of_professionals', { 
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.literal('uuid_generate_v4()')
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false
        },
      });
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('types_of_professionals');
  }
};
