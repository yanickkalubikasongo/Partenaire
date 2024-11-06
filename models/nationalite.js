'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nationalite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  nationalite.init({
    code    :DataTypes.STRING,
    libelle :DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nationalite',
  });
  return nationalite;
};