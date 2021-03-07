require("dotenv").config();
const Sequelize = require('sequelize');

const DB_URL = process.env.DATABASE_URL;

const options = process.env.ENV == 'production' ? {
  dialect: 'postgres',
  protocol: "postgres",
  dialectOptions: {
      ssl: {
          require: process.env.USE_SSL,
          rejectUnauthorized: false
      }
  }
} : {dialect: 'postgres'}

const Database = new Sequelize(DB_URL, options);

module.exports = { Database };
