const Sequelize = require('sequelize');

const sequelize = new Sequelize('juanbot', 'juanadmin', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

const Users = require('./models/Users')(sequelize, Sequelize.DataTypes);


module.exports = { Users };
