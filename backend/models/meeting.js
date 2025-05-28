const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Meeting = db.define('Meeting', {
  title: DataTypes.STRING,
  datetime: DataTypes.DATE,
  link: DataTypes.STRING,
});

module.exports = Meeting;