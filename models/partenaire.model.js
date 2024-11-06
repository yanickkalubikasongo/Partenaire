'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class partenaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  partenaire.init({
    denomination    : DataTypes.STRING,
    id_national     : DataTypes.STRING,
    rccm_f          : DataTypes.STRING,
    telephone       : DataTypes.STRING,
    email           : DataTypes.STRING,
    autorisation    : DataTypes.STRING,
    adresse_physique: DataTypes.STRING,
    etat            : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'partenaire',
  });
  return partenaire;
};