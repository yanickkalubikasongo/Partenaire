'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class compte_money extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  compte_money.init({
    devise          :DataTypes.STRING,
    type_compte     :DataTypes.STRING,
    statut          :DataTypes.STRING,
    id_agence       :DataTypes.INTEGER,
    id_user         :DataTypes.INTEGER,
    id_member       :DataTypes.INTEGER,
    id_organisation	:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'compte_money',
  });
  return compte_money;
};