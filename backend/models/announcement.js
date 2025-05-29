'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Announcement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 🔽 Each announcement belongs to a user
      Announcement.belongsTo(models.User, { foreignKey: 'UserId' });
   
    }
  }
  Announcement.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Announcement',
  },
  {
    timestamps: false,
  });
  return Announcement;
};