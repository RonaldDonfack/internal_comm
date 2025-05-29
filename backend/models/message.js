'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        // Message was sent by a User
      Message.belongsTo(models.User, { as: 'Sender', foreignKey: 'senderId' });
      // Message was received by a User
      Message.belongsTo(models.User, { as: 'Receiver', foreignKey: 'receiverId' });
   
    }
  }
  Message.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Message',
  },
  {
    timestamps: false,
  });
  return Message;
};