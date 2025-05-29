'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Each file belongs to a user
      File.belongsTo(models.User, { foreignKey: 'UserId' });
    }
  }
  File.init({
    filename: DataTypes.STRING,
    filepath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'File',
  },
  {
    timestamps: false,
  });
  return File;
};