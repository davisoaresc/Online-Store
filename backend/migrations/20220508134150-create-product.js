'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.INTEGER,
      },
      imagem: {
        type: Sequelize.STRING,
      },
      pontos: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Products');
  }
};