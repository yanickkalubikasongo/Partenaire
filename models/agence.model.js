'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class agence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  agence.init({
    denomination: DataTypes.STRING,
    telephone: DataTypes.STRING,
    avenue: DataTypes.STRING,
    quartier: DataTypes.STRING,
    numero_parcel: DataTypes.STRING,
    commune: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'agence',
  });
  return agence;
};