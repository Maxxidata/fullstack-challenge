'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(()=>{
      return queryInterface.createTable('professionals', { 
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.literal('uuid_generate_v4()')
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: true
        },
        situation: {
          type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable('professionals');
  }
};
