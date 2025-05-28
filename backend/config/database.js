const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('internal', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;