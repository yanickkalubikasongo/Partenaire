'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class connexion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  connexion.init({
    statut          : DataTypes.STRING,
    date_heure_decon: DataTypes.STRING,
    id_user         : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'connexion',
  });
  return connexion;
};