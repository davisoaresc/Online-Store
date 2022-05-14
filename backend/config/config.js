require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'davi1525',
    database: 'online-store',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
};
