const User = (sequelize, DataTypes) => {
    const userCreate = sequelize.define('User', { 
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      usuario: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      senha: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pontos: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      moedas: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
    },

    {
      tableName: 'Users',
    });

      return userCreate;
  };
  
module.exports = User;