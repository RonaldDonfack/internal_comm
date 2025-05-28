const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./aauser');

const Message = db.define('Message', {
  content: DataTypes.TEXT,
  
});

// Message.belongsTo(User, { as: 'sender', foreignKey: 'senderId' });
// Message.belongsTo(User, { as: 'receiver', foreignKey: 'receiverId' });

module.exports = Message;