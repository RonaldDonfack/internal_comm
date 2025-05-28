const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./aauser');

const File = db.define('File', {
  filename: DataTypes.STRING,
  filepath: DataTypes.STRING,
});

// File.belongsTo(User);

module.exports = File;