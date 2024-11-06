'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class structure_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  structure_user.init({
    id_user         :DataTypes.INTEGER,
    id_organisation :DataTypes.INTEGER,
    id_agence       :DataTypes.INTEGER,
    etat_user       :DataTypes.STRING
  }, {
    sequelize,
    modelName: 'structure_user',
  });
  return structure_user;
};