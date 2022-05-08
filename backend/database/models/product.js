const Product= (sequelize, DataTypes) => {
  const productCreate = sequelize.define('Product', { 
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    preco: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    },
    imagem: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },

  {
    tableName: 'Products',
  });

    return productCreate;
};

module.exports = Product;