const Sequelize = require('sequelize');
const dotEnv = require('dotenv');

dotEnv.config('./.env');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mssql',
  },
);

module.exports = sequelize;
