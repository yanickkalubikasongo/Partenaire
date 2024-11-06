'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class organisation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  organisation.init({
    denomination: DataTypes.STRING,
    id_national: DataTypes.STRING,
    rccm_f: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    autorisation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'organisation',
  });
  return organisation;
};