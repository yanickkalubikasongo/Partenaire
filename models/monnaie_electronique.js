'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class monnaie_electronique extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  monnaie_electronique.init({
    id_agence: DataTypes.INTEGER,
    montant  : DataTypes.DECIMAL,
    devise   : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'monnaie_electronique',
  });
  return monnaie_electronique;
};