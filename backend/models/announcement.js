const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./aauser');

const Announcement = db.define('Announcement', {
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
  
});

// Announcement.belongsTo(User);

module.exports = Announcement;