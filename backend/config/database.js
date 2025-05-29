const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('internal', 'root', 'AdminPass', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
