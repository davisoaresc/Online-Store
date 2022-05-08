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
    },

    {
      tableName: 'Users',
    });

      return userCreate;
  };
  
  export default User;