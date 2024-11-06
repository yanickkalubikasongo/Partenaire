'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class membre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  membre.init({
    id_user          : DataTypes.INTEGER,
    id_type_membre   : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'membre',
  });
  return membre;
};