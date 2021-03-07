const Sequelize = require('sequelize');

const { Database } = require('./db')

const Types = require('./models/types')(Database, Sequelize.DataTypes);

Types.prototype.addType = async function(msg) {
  return Types.create({message: msg})
};

Types.prototype.getAllTypes = async function() {
  return Types.findAll();
};

Types.prototype.getLength = async function() {
  return Types.count();
};

module.exports = { Types };
