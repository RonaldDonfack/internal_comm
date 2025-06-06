'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Announcement, { foreignKey: 'UserId' });
      User.hasMany(models.File, { foreignKey: 'UserId' });
      User.hasMany(models.Message, { as: 'SentMessages', foreignKey: 'senderId' });
      User.hasMany(models.Message, { as: 'ReceivedMessages', foreignKey: 'receiverId' });
  
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  },
  {
    timestamps: false,
  });
  return User;
};